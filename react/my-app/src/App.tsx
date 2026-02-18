import { Routes, Route, Link } from "react-router-dom";
import { caseList } from "./caseStudies/caseList";

const RootList = () => {
  return (
    <>
      <h1>Vinternship Case Studies</h1>

      <hr />
      <ul>
        {caseList.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Routes>
        <Route path="/" element={<RootList />} />
        {/* Auto Generated Routes */}
        {caseList.map((item) => (
          <Route key={item.path} path={item.path} element={<item.component />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
