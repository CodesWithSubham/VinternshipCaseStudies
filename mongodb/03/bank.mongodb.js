// Case Study 03: MongoDB Transactions

import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/?replicaSet=rs0";
const client = new MongoClient(uri);

async function main() {
  await client.connect();

  const db = client.db("fintrust");
  const users = db.collection("users");
  const transactions = db.collection("transactions");

  // delete old data for testing
  await users.deleteMany({});
  await transactions.deleteMany({});

  // create
  const alice = await users.insertOne({ name: "Alice", balance: 500 });
  const bob = await users.insertOne({ name: "Bob", balance: 200 });

  const aliceId = alice.insertedId;
  const bobId = bob.insertedId;

  console.log("Users created:", { aliceId, bobId });

  async function transferMoney(fromId, toId, amount) {
    const session = client.startSession();

    try {
      session.startTransaction();

      const sender = await users.findOne({ _id: fromId }, { session });

      if (!sender || sender.balance < amount) {
        throw new Error("Insufficient balance");
      }

      await users.updateOne({ _id: fromId }, { $inc: { balance: -amount } }, { session });
      await users.updateOne({ _id: toId }, { $inc: { balance: amount } }, { session });

      const tx = await transactions.insertOne(
        {
          from: fromId,
          to: toId,
          amount,
          status: "completed",
          date: new Date(),
        },
        { session },
      );

      await session.commitTransaction();
      console.log("\nTransfer Success: ", { from: fromId, to: toId, amount });

      return tx.insertedId;
    } catch (err) {
      await session.abortTransaction();
      console.log("\nTransfer Failed: ", err.message);
    } finally {
      await session.endSession();
    }
  }

  async function refundPayment(txId) {
    const session = client.startSession();

    try {
      session.startTransaction();

      const tx = await transactions.findOne({ _id: new ObjectId(txId) }, { session });

      if (!tx) throw new Error("Transaction not found");

      const receiver = await users.findOne({ _id: tx.to }, { session });

      if (!receiver || receiver.balance < tx.amount) {
        throw new Error("Receiver has insufficient balance");
      }

      await users.updateOne({ _id: tx.from }, { $inc: { balance: tx.amount } }, { session });
      await users.updateOne({ _id: tx.to }, { $inc: { balance: -tx.amount } }, { session });

      await transactions.updateOne(
        { _id: new ObjectId(txId) },
        { $set: { status: "refunded" } },
        { session },
      );

      await transactions.insertOne(
        {
          from: tx.to,
          to: tx.from,
          amount: tx.amount,
          status: "refund",
          date: new Date(),
        },
        { session },
      );

      await session.commitTransaction();
      console.log("\nRefund Success: ", { from: tx.to, to: tx.from, amount: tx.amount });
    } catch (err) {
      await session.abortTransaction();
      console.log("\nRefund Failed: ", err.message);
    } finally {
      await session.endSession();
    }
  }

  const txId = await transferMoney(aliceId, bobId, 100);

  if (txId) await refundPayment(txId);

  const finalUsers = await users.find().toArray();
  const finalTx = await transactions.find().toArray();

  console.log("\nFinal Users:", finalUsers);
  console.log("\nTransactions:", finalTx);

  await client.close();
}

main();
