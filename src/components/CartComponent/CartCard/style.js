import styled from "styled-components";

export const StyledCartCard = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.3rem;

    position: relative;


    .imgContainer{
        background-color: var(--grey-0);
        width: 5rem;
        height: 5rem;
    }

    .imgContainer img{
        width: 4.375rem;
        height: 4.375rem;
    }

    .cartCardInfo{
        max-width: 30%
    }
    
    .name{
        font-family: "Inter", sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--grey-100);
        margin-bottom: .5rem;


        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .category{
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        
        
    }
    
    .removeBtn{
        position: absolute;
        top: .7rem;
        right: 0;
        
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 600;

        padding: .3rem;
        border-radius: 8px;

        cursor: pointer;
        transition: .15s;

    }

    .removeBtn:hover{
        color: #fff;
        background-color: var(--color-secondary)
    }

`