// Supported currencies
export type Currency = "USD" | "EUR";

// Transaction model
export interface Transaction {
  id: string;
  amount: number;
  currency: Currency;
  date: Date;
}

// Budget entries
export interface IncomeEntry {
  id: string;
  amount: number;
  currency: Currency;
}

export interface ExpenseEntry {
  id: string;
  amount: number;
  currency: Currency;
}
