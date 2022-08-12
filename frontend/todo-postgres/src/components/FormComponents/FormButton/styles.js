import styled from "styled-components";

export const Button = styled.button `
    padding: 1.1rem 1.2rem;
    outline: none;
    border: none;
    border-radius: .5rem;
    width: 100%;
    background-color: var(--blue);
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    max-width: 350px;

    &:hover {
        filter: brightness(0.9);
        transition: .2s;
    }
`;