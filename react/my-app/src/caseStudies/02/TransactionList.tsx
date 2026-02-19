import type { Transaction } from "./types";

interface TransactionListProps {
  transactions: ReadonlyArray<Transaction>; // immutable
  onSelect: (id: string) => void;
}

const TransactionList = ({ transactions, onSelect }: TransactionListProps) => {
  return (
    <ul>
      {transactions.map((tx) => (
        <li key={tx.id} onClick={() => onSelect(tx.id)}>
          {tx.amount} {tx.currency} - {tx.date.toLocaleDateString()}
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
