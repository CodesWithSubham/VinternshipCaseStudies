import { useState } from "react";
import type { Transaction } from "./types";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import BudgetTracker from "./BudgetTracker";

const Case02 = () => {
  const [transactions, setTransactions] = useState<ReadonlyArray<Transaction>>([]);

  const handleAdd = (amount: number, currency: "USD" | "EUR") => {
    const newTx: Transaction = {
      id: Date.now().toString(),
      amount,
      currency,
      date: new Date(),
    };

    setTransactions((prev) => [...prev, newTx]);
  };

  return (
    <div>
      <h2>Secure Banking Dashboard</h2>

      <TransactionForm onSubmit={handleAdd} />

      <TransactionList
        transactions={transactions}
        onSelect={(id) => console.log("Selected:", id)}
      />

      <BudgetTracker rates={{ USD: 1, EUR: 1.1 }} />
    </div>
  );
};

export default Case02;
