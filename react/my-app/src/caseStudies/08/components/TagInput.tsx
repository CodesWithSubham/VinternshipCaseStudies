import { useState } from "react";

export default function TagInput({ onAddTag }: { onAddTag: (tag: string) => void }) {
  console.log("Tag input rendered");

  const [tag, setTag] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTag(value);
  };

  const handleAdd = () => {
    if (tag.trim() !== "") {
      onAddTag(tag.trim());
      setTag("");
    }
  };

  return (
    <div>
      <h3>Tag Input</h3>
      <input type="text" placeholder="Enter tag..." value={tag} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
