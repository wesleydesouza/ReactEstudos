import { BrowserRouter, Route, Routes} from "react-router-dom";


import Home from "../pages/Home";
import Props from "../pages/Props";
import ClassComponent from "../pages/ClassComponent";
import State from "../pages/State";
import CiclodeVidaComponente from "../pages/CiclodeVidaComponente";
import RenderizacaoCondicional from  "../pages/RenderizacaoCondicional";
import Listas from "../pages/Listas";
import Formularios from "../pages/Formulario";
import UseState from "../pages/Hooks";
import RequisicoesHttp from "../pages/requisicoesHttp";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/reactestudos" element={<Home/>}/>
        <Route path="/reactestudos/props" element={<Props/>}/>
        <Route path="/reactestudos/classcomponent" element={<ClassComponent/>}/>
        <Route path="/reactestudos/state" element={<State/>}/>
        <Route path="/reactestudos/ciclodevidacomponente" element={<CiclodeVidaComponente/>}/>
        <Route path="/reactestudos/renderizacaoCondicional" element={<RenderizacaoCondicional/>}/>
        <Route path="/reactestudos/listas" element={<Listas/>}/>
        <Route path="/reactestudos/formularios" element={<Formularios/>}/>
        <Route path="/reactestudos/hooks" element={<UseState/>}/>
        <Route path="/reactestudos/requisicoesHttp" element={<RequisicoesHttp/>}/>

      </Routes>
    </BrowserRouter>
  
  );
}

export default routes;
