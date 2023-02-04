import styled from "styled-components"

export const StyledProductsContainer = styled.ul`
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    overflow-x: scroll;

    @media(min-width: 500px){
        width: 90%;
        margin: 2rem auto;
        padding: 0;
    }

    @media(min-width: 1024px){

        margin-top: 3rem;
        overflow-x: none;
        flex-wrap: wrap;



    }

`

