import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// ** components
import Loader from "../components/Loader/Loader";

// ** pages
const Landing = lazy(() => import("../pages/Landing"));
const Chart = lazy(() => import("../pages/ChartPage"));
const Convert = lazy(() => import("../pages/Convert"));

const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/charts" element={<Chart />} />
        <Route path="/convert" element={<Convert />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
