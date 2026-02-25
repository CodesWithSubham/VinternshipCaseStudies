import React from "react";

interface Props {
  title: string;
  author: string;
  onApprove: () => void;
}

export const ArticleCard: React.FC<Props> = ({
  title,
  author,
  onApprove,
}) => (
  <div>
    <h2>{title}</h2>
    <p>By {author}</p>
    <button onClick={onApprove}>Approve</button>
  </div>
);
