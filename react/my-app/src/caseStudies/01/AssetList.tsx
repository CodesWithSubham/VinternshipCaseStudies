import type { Asset } from "./types";
import AssetCard from "./AssetCard";

interface AssetListProps {
  assets: Asset[];
  onRemove: (symbol: string) => void;
}

const AssetList = ({ assets, onRemove }: AssetListProps) => {
  return (
    <div>
      {assets.map((asset) => (
        <AssetCard key={asset.symbol} {...asset} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default AssetList;
