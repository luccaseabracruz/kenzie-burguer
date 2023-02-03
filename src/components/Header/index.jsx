import { StyledHeader } from "./style";
import logo from "../../assets/logo.svg"
import InputSearch from "./InputSearch";

export default function Header() {


    return (
        <StyledHeader>
            <img src={logo} alt="Logo da Burguer Kenzie" />

            <InputSearch />


        </StyledHeader>
    )
}