import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Cadastro";
function routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                
            </Routes>
        </BrowserRouter>
    )

}

export default routes;