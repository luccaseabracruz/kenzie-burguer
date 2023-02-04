import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--grey-0);
    box-shadow: 0 0 .5rem var(--grey-50);    


    .headerContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .875rem; 
        padding: .875rem 1rem;
        margin: 0 auto;

    }


    @media(min-width: 768px){
        .headerContainer{
            flex-direction: row;
            justify-content: space-between;
            width: 90%;
            max-width: 80rem;
            padding: .875rem 0;


        }
        
    }
    
`