// We are using Vite instead of Webpack, so `webpack-bundle-analyzer` is not compatible.
// Since Vite uses Rollup internally, we use `rollup-plugin-visualizer` for bundle analysis.
// This ensures accurate and proper visualization of bundle size in a Vite-based project.

import { Suspense, lazy, useMemo, useState } from "react";
import { debounce } from "./utils/debounce";

const AdminPanel = lazy(() => import("./components/AdminPanel"));

export default function App() {
  const [search, setSearch] = useState("");
  const [showAdmin, setShowAdmin] = useState(false);

  const [debouncedValue, setDebouncedValue] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        setDebouncedValue(value as string);
      }, 1000),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>CS10 - Bundle Analysis</h1>

      <input value={search} onChange={handleChange} placeholder="Search products..." />
      <p>Debounced Value: {debouncedValue}</p>

      <br />
      <br />

      <button onClick={() => setShowAdmin(true)}>Open Admin Panel</button>

      {showAdmin && (
        <Suspense fallback={<div>Loading Admin...</div>}>
          <AdminPanel />
        </Suspense>
      )}
    </div>
  );
}
