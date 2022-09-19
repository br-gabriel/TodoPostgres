import styled from "styled-components";

export const Container = styled.header `
    width: 100%;
    height: 30vh;
    background-color: var(--blue);
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div `
    width: 90%;
    max-width: 1120px;

    position: absolute;
    top: 3rem;
    
    color: white;
    font-size: 2.2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        width: 100%;
        max-width: 100px;

        background-color: transparent;
        color: white;

        padding: .5rem;
        
        border: 1px solid white;
        border-radius: 0.5rem;
        
        font-weight: bold;

        &:hover {
            filter: brightness(0.8);
            transition: .2s;
        }
    }
`