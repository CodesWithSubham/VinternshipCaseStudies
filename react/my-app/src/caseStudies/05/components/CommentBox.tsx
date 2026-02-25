import React, { useState } from "react";

interface Props {
  onPost: (comment: string) => void;
}

export const CommentBox: React.FC<Props> = ({ onPost }) => {
  const [value, setValue] = useState("");

  const handlePost = () => {
    if (!value.trim()) return;
    onPost(value);
    setValue("");
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write comment..."
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};
