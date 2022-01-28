import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,108,1) 0%, rgba(0,212,255,1) 100%);

        font-family: 'Roboto', sans-serif;
    }

    #main {
        max-width: 1000px;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 480px) {
        html {
            font-size: 10px;
        }
        
        #main {
            max-width: 300px;
        }
    }
`
