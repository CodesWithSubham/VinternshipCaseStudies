import { ArticleApproval } from "./components/ArticleApproval";
import { CommentBox } from "./components/CommentBox";

const Case05 = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Case 05: Testing & Debugging React Apps</h1>

      <ArticleApproval
        article={{ title: "Live News", author: "Editor" }}
      />

      <hr />

      <CommentBox onPost={(msg) => alert(`Posted: ${msg}`)} />
    </div>
  );
};

export default Case05;
