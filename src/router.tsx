import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import IndexPageView from "./views/IndexPageView";
import { GaleriaView } from "./views/GaleriaView";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<IndexPageView />} />
          <Route path="/galeria" element={<GaleriaView />} />
          {/* Captura cualquier otra ruta */}
          <Route path="*" element={<IndexPageView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
