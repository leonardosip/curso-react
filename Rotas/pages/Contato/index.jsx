import { Link } from "react-router-dom";

function Contato(){
    return(

        <div >
        <h1>Entre em Contato com a nossa empresa</h1>
        <br/>      
        <Link to='/'> Home </Link><br/>
        <Link to='/sobre'> Sobre </Link>
       </div>

    );
}

export default Contato;