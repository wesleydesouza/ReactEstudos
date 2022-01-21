import { Component } from "react";

import Membro from "../../components/Membro";

class Home extends Component{
    
    render(){
        
        return(
            <>
            <h1>Home</h1>
            <hr/>
            <Membro nome="visitante"/>
            </>
        );
    }
};

export default Home;