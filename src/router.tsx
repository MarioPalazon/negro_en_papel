import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import IndexPageView from "./views/IndexPageView";
import { TrabajosView } from "./views/TrabajosView";
import { InformacionView } from "./views/InformacionView";
import { GaleriaView } from "./views/GaleriaView";

export const Router=()=>{
    
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<IndexPageView />} index />
                    <Route path="/trabajos" element={<TrabajosView />}  />
                    <Route path="/Informacion" element={<InformacionView />}  />
                    <Route path="/galeria" element={<GaleriaView />}  />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;