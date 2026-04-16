import Sobre from "./Sobre";
import Sociais from "./Sociais";

function Equipe(props) {
    return (
        <div>
            <Sobre 
                usuario={props.nome}
                funcao={props.cargo}
                anos={props.idade}            
            />
            <Sociais 
                linked={props.linked}
                gith={props.git}            
            />
        </div>
    );
}

export default Equipe;