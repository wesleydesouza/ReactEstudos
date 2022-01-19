import { Component } from "react";

class Equipe extends Component{

    render(){
        return(
            
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
               
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component{
    
    render(){
        return(
        <div>
            <h2>Olá sou o(a) {this.props.nome}</h2>
            <h3>Meu cargo é: {this.props.cargo}</h3>
            <h3>Minha idade é: {this.props.idade}</h3>
            
        </div>
        );
    };
};

function ClassComponent(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Wesley" cargo="Programador" idade="24"/>
            <Equipe nome="Taiana" cargo="Dentista" idade="33"/>
        </div>
    );
};

export default ClassComponent;