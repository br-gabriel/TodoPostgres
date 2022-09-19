import styled from "styled-components";

export const Container = styled.footer`
    position: absolute;
    bottom: 0px;
    
    width: 100%;
    display: block;
    padding: 1rem;
    
    background: transparent;
    text-align: center;
    color: var(--gray);

    font-size: 1.05rem;

    a {
        color: var(--gray);
        text-decoration: none;

        font-size: 1.05rem;

        &:hover {
            filter: brightness(0.8);
            transition: .2s;
        }
    }
`