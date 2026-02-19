import { useReducer } from "react";
import type { Currency, IncomeEntry, ExpenseEntry } from "./types";

interface BudgetState {
  readonly incomes: ReadonlyArray<IncomeEntry>;
  readonly expenses: ReadonlyArray<ExpenseEntry>;
  selectedCurrency: Currency;
}

type BudgetAction =
  | { type: "addIncome"; entry: IncomeEntry }
  | { type: "addExpense"; entry: ExpenseEntry }
  | { type: "setCurrency"; currency: Currency };

interface BudgetTrackerProps {
  rates: Record<Currency, number>;
}

const reducer = (state: BudgetState, action: BudgetAction): BudgetState => {
  switch (action.type) {
    case "addIncome":
      return { ...state, incomes: [...state.incomes, action.entry] };

    case "addExpense":
      return { ...state, expenses: [...state.expenses, action.entry] };

    case "setCurrency":
      return { ...state, selectedCurrency: action.currency };

    default:
      return state;
  }
};

const BudgetTracker = ({ rates }: BudgetTrackerProps) => {
  const [state, dispatch] = useReducer(reducer, {
    incomes: [],
    expenses: [],
    selectedCurrency: "USD",
  });

  const convert = (amount: number, currency: Currency): number => {
    return amount * rates[currency];
  };

  const totalIncome = state.incomes.reduce((sum, i) => sum + convert(i.amount, i.currency), 0);

  const totalExpense = state.expenses.reduce((sum, e) => sum + convert(e.amount, e.currency), 0);

  const net = totalIncome - totalExpense;

  return (
    <div>
      <h3>Budget Tracker</h3>

      <p>Net Balance (USD): {net.toFixed(2)}</p>

      <button
        onClick={() =>
          dispatch({
            type: "addIncome",
            entry: { id: Date.now().toString(), amount: 100, currency: "USD" },
          })
        }
      >
        Add Income
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "addExpense",
            entry: { id: Date.now().toString(), amount: 50, currency: "USD" },
          })
        }
      >
        Add Expense
      </button>
    </div>
  );
};

export default BudgetTracker;
