import { createGlobalStyle } from "styled-components";

export const Typography = createGlobalStyle`
    .heading{
        font-weight: 700;
    }

    .heading.one{
        font-size: 1.625rem;
    }
    .heading.two{
        font-size: 1.375rem;
    }
    .heading.three{
        font-size: .8182rem;
    }
    .heading.four{
        font-size: .875rem;
    }

    .headline, .caption{
        font-weight: 400;
    }

    .headline{
        font-size: 1rem;
    }

    .caption{
        font-size: .75rem;
    }
`