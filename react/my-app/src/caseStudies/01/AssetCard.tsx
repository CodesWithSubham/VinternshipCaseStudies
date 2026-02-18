import type { Asset } from "./types";

export interface AssetCardProps extends Asset {
  onRemove: (symbol: string) => void;
}

const AssetCard = ({ name, symbol, value, change, onRemove }: AssetCardProps) => {
  return (
    <div>
      <strong>
        {name} ({symbol})
      </strong>
      <div>Value: ${value}</div>
      <div>
        Change: {change > 0 ? "+" : ""}
        {change}%
      </div>
      <button onClick={() => onRemove(symbol)}>Remove</button>
      <hr />
    </div>
  );
};

export default AssetCard;
