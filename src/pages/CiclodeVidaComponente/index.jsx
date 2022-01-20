import { Component } from "react";

class CiclodeVidaComponente extends Component{

    constructor(props){
        super(props);
        this.state = {
            hora: "00:00:00"
        };
    };

    componentDidMount(){
        //só é chamado quando o elemento é montado (inserido) na tela, ele só será chamado novamente caso o elemento seja desmontado e montado novamente (uma navegação por exemplo, tambem muito usado para consumir uma api extra,pegar um webservice).
     
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);

    };

    componentDidUpdate(){
        //é chamado em cada att 
        console.log("atualizou!")
    };

    /*
    shouldComponentUpdate(){
        //retorna um true ou false, conforme uma decisao
    };
    */

    render(){
        return(
            <div>
                <h1>Meu Projeto {this.state.hora}</h1>

                <section>
                    <h1>Ciclos de vida dos Componentes</h1>
                    <p>Então como vimos na aula nos ciclos de vida do componente temos:</p>
                    <ul>
                        <li>Inicialização </li>

                        <li>Montagem </li>

                        <li>Atualização </li>

                        <li>Desmontagem </li>
                    </ul>


                    <p><b>- Inicialização</b></p>

                    <p>Nesta fase, o componente React se prepara para sua inicialização, configurando os estados iniciais e props padrões se houverem.</p>



                    <p><b>- Montagem</b></p>

                    <p>Depois de preparar com todas as necessidades básicas, estado e props, o nosso Componente React está pronto para ser montado no DOM do navegador.</p>

                    <p><b>componentWillMount()</b> É executado quando o componente estiver prestes a ser montado no DOM da página. Assim, após esse método ser executado o componente irá criar o nó no navegador. Todas as coisas que você deseja fazer antes do componente ser montado, devem ser definidas aqui.</p>



                    <p><b>componentDidMount()</b> Este é o método que é executado depois que o componente foi montado no DOM</p>
                    <p><b>- Atualização</b></p>

                    <p>Esta fase começa quando o componente React já nasceu no navegador e cresce recebendo novas atualizações. O componente pode ser atualizado de duas maneiras, através do envio de novas props ou a atualização do seu estado.</p>



                    <p><b>componentDidUpdate()</b> é chamado imediatamente após a atualização.</p>



                    <p><b>componentWillUpdate()</b> É executado somente quando shouldComponentUpdatedevolver true.</p>



                    <p><b>- Desmontagem</b></p>

                    <p>Nesta fase, o componente não é mais necessário e será desmontado do DOM. O método que se chama nesta fase é o:</p>

                    <p><b>componentWillUnmount()</b></p>

                </section>
            </div>
        );
    };
};

export default CiclodeVidaComponente;