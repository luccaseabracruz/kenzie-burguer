import styled from "styled-components"

export const StyledCard = styled.li`
    border: 2px solid var(--grey-20);
    border-radius: 5px;
    min-width: 18.75rem;

    .imgContainer{
        background-color: var(--grey-0);
        width: 100%;
    }
    .imgContainer img{
        max-height: 10.1rem;
    }

    .productInfo{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.375rem;
    }

    .productInfo h2{
        font-size: 1rem;
    }

    .price{
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 600;

        color: var(--color-primary)
    }

    @media(min-width: 1024px){
        min-width: 14.5rem;
    }
`