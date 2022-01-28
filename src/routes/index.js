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
import Produtos from "../pages/Produtos";
import Erro from "../pages/Erro"

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/reactestudos" element={<Home/>}/>
        <Route exact path="/reactestudos/props" element={<Props/>}/>
        <Route exact path="/reactestudos/classcomponent" element={<ClassComponent/>}/>
        <Route exact path="/reactestudos/state" element={<State/>}/>
        <Route exact path="/reactestudos/ciclodevidacomponente" element={<CiclodeVidaComponente/>}/>
        <Route exact path="/reactestudos/renderizacaoCondicional" element={<RenderizacaoCondicional/>}/>
        <Route exact path="/reactestudos/listas" element={<Listas/>}/>
        <Route exact path="/reactestudos/formularios" element={<Formularios/>}/>
        <Route exact path="/reactestudos/hooks" element={<UseState/>}/>
        <Route exact path="/reactestudos/requisicoesHttp" element={<RequisicoesHttp/>}/>
        <Route path="/reactestudos/produtos/:id" element={<Produtos/>}/>
        <Route path="*" element={<Erro/>}/>

      </Routes>
    </BrowserRouter>
  
  );
}

export default routes;
