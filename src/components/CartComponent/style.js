import styled from "styled-components";

export const StyledCartContainer = styled.div`
    margin: 1rem;
    border-radius: 5px;
    overflow: hidden;


    .cartHeader{
        padding: 1.375rem 1.25rem;
        color: #ffffff;
        background-color: var(--color-primary);
    }

    .cartHeader h1{
        font-weight: 700;
        font-size: 1.5rem;
    }

    ul{
        padding: 1.25rem;
        background-color: var(--grey-0);
    }

    ul h1{
        
        color: var(--grey-100);
        margin-bottom: 1rem;
    }
    ul p{
        color: var(--grey-50);
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;

    }

    .emptyCartContainer{
        padding: 3.5rem;
    }

    .itensContainer{
        border-bottom: 2px solid var(--grey-50);
        margin-bottom: 1rem;
    }
`
