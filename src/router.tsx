import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import IndexPageView from "./views/IndexPageView";

export const Router=()=>{
    
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<IndexPageView />} index />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;