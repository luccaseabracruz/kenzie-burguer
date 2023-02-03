import styled from "styled-components";

export const StyledValueContainer = styled.div`

    padding: 1.25rem;
    background-color: var(--grey-0);

    .info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: .5rem;
        padding: 0 .5rem;

        font-family: Inter;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    h2{
        color: var(--grey-100);
    }
    p{
        color: var(--grey-50);

    }

    button{
        width: 100%;
    }
`