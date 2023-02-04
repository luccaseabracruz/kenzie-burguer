import { useState } from "react";
import { StyledContainer } from "./style";

export default function InputSearch({setSearch}) {

    const [searchValue, setSearchValue] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        setSearch(searchValue)
        setSearchValue("")
        
    }

    return (
        <StyledContainer onSubmit={handleSubmit}>
            <input value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} className="headline" type="text" placeholder="Digitar Pesquisa"/>
            <button className="medium green">Pesquisar</button>
        </StyledContainer>
    )
}