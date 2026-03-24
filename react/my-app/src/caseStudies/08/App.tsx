import { useCallback, useState } from "react";
import TagInput from "./components/TagInput";
import { TagList } from "./components/TagList";

export default function App() {
  const [tags, setTags] = useState<string[]>([]);
  const [filter, setFilter] = useState("");

  const handleAddTag = useCallback((tag: string) => {
    setTags((prevTags) => [...prevTags, tag]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CS08 - Memoization</h1>

      <h2>Add Tag</h2>
      <TagInput onAddTag={handleAddTag} />

      <h2>Filter Tags</h2>
      <input
        type="text"
        placeholder="Enter a tag..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <h2>Filtered Tags</h2>
      <TagList tags={tags} filter={filter} />
    </div>
  );
}
