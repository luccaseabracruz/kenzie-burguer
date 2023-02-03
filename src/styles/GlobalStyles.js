import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        /* Colors */
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        /* Grey scale */
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        /* Feedback Palette */
        --color-feedback-negative: #E60000;
        --color-feedback-warning: #FFCD07;
        --color-feedback-success: #168821;
        --color-feedback-information: #155BCB;

    }

    /* buttons */

    button{
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        line-height: 19.36px;
        border-radius: 8px;
        border: none;

        transition: .15s;
    }

    button.default{
        padding: 1.25rem;
    }

    button.medium{
        padding: .75rem 1.25rem;
    }

    button.green{
        background-color: var(--color-primary);
        color: #ffffff
    }
    button.green:hover{
        background-color: var(--color-primary-50)
    }

    button.grey{
        background-color: var(--grey-20);
        color: var(--grey-100)
    }
    button.grey:hover{
        background-color: var(--grey-100);
        color: var(--grey-20) 
    }

    

`