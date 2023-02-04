import { StyledHeader } from "./style";
import logo from "../../assets/logo.svg"
import InputSearch from "./InputSearch";

export default function Header({setSearch}) {


    return (
        <StyledHeader>
            <div className="headerContainer">
                <img src={logo} alt="Logo da Burguer Kenzie" />
                <InputSearch setSearch={setSearch}/>
            </div>


        </StyledHeader>
    )
}