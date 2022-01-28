import { useParams } from "react-router-dom";

const Produtos = () => {
    const { id } = useParams();

    return(
        <div>
            <h1>Grade de produtos</h1> <br/>

            <span>Produtos selecionado: {id}</span>

        </div>
    )
}

export default Produtos;