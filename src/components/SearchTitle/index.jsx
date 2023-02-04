import { StyledContainer } from "./style";

export default function SearchTitle({search, setFilteredProducts}) {

    return (
        <StyledContainer>
            <h1>Resultados da pesquisa: {search}</h1>
            <button className="grey medium" onClick={()=> setFilteredProducts([])}>Limpar busca</button>
        </StyledContainer>
    )
}