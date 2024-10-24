import {useState} from "react";

const TesteHook = () => {
    // Variavél não renderiz.
    let valorVariavel = 10; // isso não altera
    const [variavelModificada, setVariavelModificadas] = useState(13);
    return(

        <div>

            <h6>Valor da variavel: {valorVariavel}</h6>
            {/*Abaixo não funciona*/}
            {/*<button onClick={()=> {valorVariavel = 15;}}>Altera</button>*/}

            <button onClick={() => setVariavelModificadas(575)}>Hook</button>
            <h6>Valor da variavel do Hook: {variavelModificada}</h6>

        </div>


    )


}

export default TesteHook;