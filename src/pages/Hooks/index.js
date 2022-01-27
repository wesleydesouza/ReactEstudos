import React, { useEffect, useState, useMemo, useCallback } from "react";

const UseState = () => {

    const [tarefas, setTarefas] = useState([]);

    const [input, setInput] = useState("")

    useEffect(() => {
        const tarefasStorage = localStorage.getItem("tarefas");

        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }

    }, [])


    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    const handleAdd = useCallback(() => {
        setTarefas([...tarefas, input]);
        setInput("");
    }, [input, tarefas]);

    const totalTarefas = useMemo(() => tarefas.length, [tarefas])


    return(
        <div>
            <h1>useState</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}> {tarefa}</li>
                ))}
            </ul>
            <br/>
            <strong>Você tem {totalTarefas} tarefas</strong><br/>
            <input type="text" value={input} onChange={(e) => {
                setInput(e.target.value)
            }}></input>
            <button type="button" onClick={handleAdd}>Adicionar</button>
        </div>
    );
    
            /*useState do Hooks


        Vamos ao exemplo:

        import React, { useState } from 'react';
        
        function App() {
        
        // Declarar uma nova variável de state, na qual chamaremos de "contador"
        const [contador, setContador] = useState(0);
        
        return (
            <div>
            <p>You clicked {contador} times</p>
            <button onClick={() => setContador(contador + 1)}>
                Aumentar
            </button>
            </div>
        );
        }


        Vamos destrinchar isso aqui:

        const [contador, setContador] = useState(0);
        - Criamos um estado chamado de contador e onde o valor padrão ele começa com 0

        - Quando queremos alterar o valor do state contador nós usamos o setContador()



        - Como no exemplo acima quando você clicar no botão ele vai mudar o valor do contador para o valor que ele tem + 1 (ou seja se o valor começa em 0 vai ser 0 + 1 e quando o valor tiver em 1 vai ser 1 + 1 e por ai em diante).
        */

}

export default UseState;