import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Props from "../pages/Props";
import ClassComponent from "../pages/ClassComponent";
import State from "../pages/State"

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="props" element={<Props/>}/>
        <Route path="classcomponent" element={<ClassComponent/>}/>
        <Route path="State" element={<State/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default routes;
