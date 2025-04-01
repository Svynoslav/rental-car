import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CarDetailsPage = lazy(() =>
  import("../../pages/CarDetailsPage/CarDetalisPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/catalog/:carId" element={<CarDetailsPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
