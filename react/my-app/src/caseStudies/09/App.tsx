import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./components/Home";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

const AdminElement = lazy(() => import("./components/AdminPanel"));

export default function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin" element={<AdminElement />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
