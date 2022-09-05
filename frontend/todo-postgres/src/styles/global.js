import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F3F5FB;
        --blue: #273FAC;
        --red: #E52E4D;
        --green: #3FAD27;
        --text-title: #303134;
        --text-body: #969CB3;
        --gray: #BBC4E7;
        --input-background: #f0f2f5; 
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    body {
        position: relative;
        background: var(--background);
        min-height: 100vh;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .editTaskOverlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .editTaskModalContent {
        width: 100%;
        max-width: 576px;

        background-color: white;
        padding: 2rem;
        position: relative;
        border-radius: 1rem;
    }
`