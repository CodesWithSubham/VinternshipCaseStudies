import { memo } from "react";

export const TagList = memo(({ tags, filter }: { tags: string[]; filter: string }) => {
  console.log("Tag list rendered");
  const filteredTags = tags.filter((tag) => tag.includes(filter));

  return (
    <div>
      <h1>TagList</h1>
      <ul>
        {filteredTags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
});
