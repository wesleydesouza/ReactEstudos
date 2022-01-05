import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--color-background);
    }

    input,select, button{
        outline: none;
    }

    :root {
        /* Colors*/
       --color-primary:#bf00b5;
       --color-gradient: linear-gradient(155.34deg,#8257e6 -0.59%,#bf00b5 80%);
       --color-gradient-hover: linear-gradient(155.34deg,#bf00b5 -0.59%,#8257e6  80%);
       --color-white: #fff;
       --color-gray: #5f5f5f;
       --color-background: #121214;

       /* Styles*/
       --border-radius: 8px;
    }
`