import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Signin from "../pages/Signin";

function routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                
            </Routes>
        </BrowserRouter>
    )

}

export default routes;