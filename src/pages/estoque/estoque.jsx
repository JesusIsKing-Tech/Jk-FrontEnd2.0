import HeaderLogado from "../../components/headerLogado/headerLogado";
import {Background,Box} from "./estoqueStyle"
import DashEstoque from '../../components/dashEstoque/DashEstoque'
import FoodGrid from "../../components/foodGrid/foodGrid";
function Estoque() {
    return (
        <>
            <HeaderLogado/>
            <Background>
                
                <FoodGrid/>
                
                
                <DashEstoque/>

            
            </Background>

        </>
    );
}

export default Estoque;
