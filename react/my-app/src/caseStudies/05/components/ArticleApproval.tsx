import React from "react";
import { ArticleCard } from "./ArticleCard";
import { useApproval } from "../hooks/useApproval";

interface Article {
  title: string;
  author: string;
}

export const ArticleApproval: React.FC<{ article: Article }> = ({
  article,
}) => {
  const { approved, approve } = useApproval();

  return (
    <div>
      <ArticleCard
        title={article.title}
        author={article.author}
        onApprove={approve}
      />
      {approved && <span>Approved!</span>}
    </div>
  );
};
