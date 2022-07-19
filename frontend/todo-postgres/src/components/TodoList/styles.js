import styled from "styled-components";

export const Todo = styled.div `
    max-width: 1120px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 3.3rem;

        max-width: 800px;
    }

    div input {
        margin-right: 1rem;
    }

    section {
        margin-right: 1.7rem;
    }

    button {
        border: none;
        background-color: transparent;
        margin-right: 1.5rem;
    }

    button:hover {
        filter: brightness(0.5)
    }
`
