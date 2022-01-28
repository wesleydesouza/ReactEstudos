import { Component } from "react";
import { Link } from "react-router-dom";

import Membro from "../../components/Membro";

class Home extends Component{
    
    render(){
        
        return(
            <>
            <h1>Home</h1>
            <hr/>
            <Membro nome="visitante"/>
            <Link to="/reactestudos/props">Props</Link><br/>
            <Link to="/reactestudos/classcomponent">Class component</Link><br/>
            <Link to="/reactestudos/state">State</Link><br/>
            <Link to="/reactestudos/ciclodevidacomponente">ciclodevidacomponente</Link><br/>
            <Link to="/reactestudos/renderizacaoCondicional">renderizacaoCondicional</Link><br/>
            <Link to="/reactestudos/listas">Listas</Link><br/>
            <Link to="/reactestudos/formularios">Formularios</Link><br/>
            <Link to="/reactestudos/hooks">Hooks</Link><br/>
            <Link to="/reactestudos/requisicoesHttp">RequisicoesHttp</Link><br/>
            <Link to="/reactestudos/produtos/:id">produtos</Link>

            </>
        );
    }
};

export default Home;