import { useParams } from "react-router-dom";

function Produto(){

    const { id } = useParams();

    return(
        <div>
            <span>    
            Meu produto eh {id}
            </span>
        </div>
    )
}

export default Produto;