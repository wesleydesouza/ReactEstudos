import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Props from "../pages/Props";
import ClassComponent from "../pages/ClassComponent";
import State from "../pages/State";
import CiclodeVidaComponente from "../pages/CiclodeVidaComponente";
import RenderizacaoCondicional from  "../pages/RenderizacaoCondicional";
import Listas from "../pages/Listas";
import Formularios from "../pages/Formulario";
import UseState from "../pages/Hooks";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reactestudos" element={<Home/>}/>
        <Route path="/reactestudos/props" element={<Props/>}/>
        <Route path="/reactestudos/classcomponent" element={<ClassComponent/>}/>
        <Route path="/reactestudos/state" element={<State/>}/>
        <Route path="/reactestudos/ciclodevidacomponente" element={<CiclodeVidaComponente/>}/>
        <Route path="/reactestudos/renderizacaoCondicional" element={<RenderizacaoCondicional/>}/>
        <Route path="/reactestudos/listas" element={<Listas/>}/>
        <Route path="/reactestudos/formularios" element={<Formularios/>}/>
        <Route path="/reactestudos/hooks" element={<UseState/>}/>

      </Routes>
    </BrowserRouter>
  
  );
}

export default routes;
