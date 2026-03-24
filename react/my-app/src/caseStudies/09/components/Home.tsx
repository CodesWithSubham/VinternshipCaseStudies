import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";

const Setting = lazy(() => import("./Setting"));

export default function Home() {
  const [settingOpen, setSettingOpen] = useState(false);
  return (
    <div>
      <h1>Lazy Loading</h1>
      <Link to="admin">Go to Admin Panel</Link>
      <hr />
      <button onClick={() => setSettingOpen(!settingOpen)}>
        {settingOpen ? "Close Setting" : "Open Setting"}
      </button>

      {settingOpen && (
        <div>
          <hr />
          <Suspense fallback={<p>Loading Setting...</p>}>
            <Setting />
          </Suspense>
        </div>
      )}
    </div>
  );
}
