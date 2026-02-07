// 06 - Built in Types in Typescript
function processTransaction(amount, description, isCredit) {
    if (amount < 0)
        throw new Error("Amount must be greater than zero");
    var filteredDescription = description !== null && description !== void 0 ? description : "No description provided";
    var transactionType = isCredit ? "Credit" : "Debit";
    // Print a summary of the transaction.
    console.log("Transaction:  ".concat(transactionType, " of $").concat(amount, " - ").concat(filteredDescription));
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
