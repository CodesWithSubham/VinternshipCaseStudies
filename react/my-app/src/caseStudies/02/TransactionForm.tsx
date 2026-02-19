import React from "react";
import type { Currency } from "./types";

interface TransactionFormProps {
  onSubmit: (amount: number, currency: Currency) => void;
}

interface TransactionFormState {
  amount: string;
  currency: Currency;
}

class TransactionForm extends React.Component<TransactionFormProps, TransactionFormState> {
  state: TransactionFormState = {
    amount: "",
    currency: "USD",
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const amount = Number(this.state.amount);
    if (amount <= 0) return; // prevent invalid values

    this.props.onSubmit(amount, this.state.currency);
    this.setState({ amount: "", currency: "USD" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />
        <select
          value={this.state.currency}
          onChange={(e) => this.setState({ currency: e.target.value as Currency })}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    );
  }
}

export default TransactionForm;
