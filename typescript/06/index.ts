// 06 - Built in Types in Typescript

function processTransaction(
  amount: number,
  description: string | undefined,
  isCredit: boolean,
): void {
  if (amount < 0) throw new Error("Amount must be greater than zero");

  const filteredDescription = description ?? "No description provided";
  const transactionType = isCredit ? "Credit" : "Debit";

  // Print a summary of the transaction.
  console.log(`Transaction:  ${transactionType} of $${amount} - ${filteredDescription}`);
}

// Example calls
processTransaction(456, "Salary credit", true);
processTransaction(234, undefined, false);

// Example call with negative amount
processTransaction(-23, "Late fee", false); // Throws a runtime error
/*
D:\Vinternship Case Studies\typescript\06\index.js:4
throw new Error("Amount must be greater than zero");
^

Error: Amount must be greater than zero
*/
