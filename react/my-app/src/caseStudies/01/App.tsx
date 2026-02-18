import { useReducer } from "react";
import type { Asset } from "./types";
import AssetForm from "./AssetForm";
import AssetList from "./AssetList";
import PortfolioSummary from "./PortfolioSummary";

interface PortfolioState {
  assets: Asset[];
}

type PortfolioAction = { type: "add"; asset: Asset } | { type: "remove"; symbol: string };

function reducer(state: PortfolioState, action: PortfolioAction): PortfolioState {
  switch (action.type) {
    case "add":
      return { ...state, assets: [...state.assets, action.asset] };
    case "remove":
      return { ...state, assets: state.assets.filter((a) => a.symbol !== action.symbol) };
    default:
      return state;
  }
}

const Case01 = () => {
  const [state, dispatch] = useReducer(reducer, { assets: [] });

  return (
    <div>
      <h2>Smart Portfolio Dashboard</h2>

      <AssetForm onAdd={(asset) => dispatch({ type: "add", asset })} />

      <PortfolioSummary assets={state.assets} />

      <AssetList
        assets={state.assets}
        onRemove={(symbol) => dispatch({ type: "remove", symbol })}
      />
    </div>
  );
};

export default Case01;
