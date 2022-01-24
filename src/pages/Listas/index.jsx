import { Component } from "react";

import Feed from "../../components/Feed/";

class Listas extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id: 1, username: "Wesley", curtidas: 10, comentarios: 2},
                {id: 2, username: "Lucas", curtidas: 120, comentarios: 24},
                {id: 3, username: "Amanda", curtidas: 30, comentarios: 12},
                {id: 3, username: "Carlos", curtidas: 1, comentarios: 0}

            ]
        };
    };
    
    render(){
        return(
            <>

                {this.state.feed.map((item)=>{
                    return(
                       <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                    )
                })}
            </>        
        );
    };
};

export default Listas;