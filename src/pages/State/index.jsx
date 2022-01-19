import { Component } from "react";

class State extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: "Wesley",
            contador: 0
        };
        
        this.aumentar = this.aumentar.bind(this);//serve para aumentar o escopo
        this.diminuir = this.diminuir.bind(this);
    };

    aumentar(){
        let state = this.state;
        state.contador++
        state.nome = "Zé"
       this.setState(state)
    };

    diminuir(){
        
        let state = this.state;
        if(state.contador === 0){
            return;
        }
        state.contador--
        state.nome = "Marcos"
        this.setState(state)
    };

    render(){
        return(
            <>
                <h1>Contador</h1>
                {this.state.nome}
                <h3><button onClick={this.diminuir}>-</button> {this.state.contador} <button onClick={this.aumentar}>+</button> </h3>
            </>
        );
    };
};

export default State;