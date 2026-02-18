import type { Asset } from "./types";

interface PortfolioSummaryProps {
  assets: Asset[];
}

const PortfolioSummary = ({ assets }: PortfolioSummaryProps) => {
  const totalValue = assets.reduce((sum, a) => sum + a.value, 0);

  const avgChange =
    assets.length === 0 ? 0 : assets.reduce((sum, a) => sum + a.change, 0) / assets.length;

  return (
    <div>
      <h3>Portfolio Summary</h3>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
      <p>Average Change: {avgChange.toFixed(2)}%</p>
      <hr />
    </div>
  );
};

export default PortfolioSummary;
