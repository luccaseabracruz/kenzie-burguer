import { StyledContainer } from "./style";

export default function InputSearch() {


    return (
        <StyledContainer>
            <input className="headline" type="text" placeholder="Digitar Pesquisa"/>
            <button className="medium green">Pesquisar</button>
        </StyledContainer>
    )
}