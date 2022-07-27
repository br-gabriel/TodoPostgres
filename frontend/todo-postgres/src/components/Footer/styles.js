import styled from "styled-components";

export const Container = styled.footer`
    color: var(--text-body);
    width: 100%;

    position: absolute;
    bottom: 1rem;
    
    
    p {
        display: flex;
        justify-content: center;

        a {
            margin-left: .35rem;
            color: var(--text-body);
            text-decoration: none;

            &:hover {
                color: var(--blue);
                text-decoration: underline;
                transition: .2s;
            }

            &:visited {
                color: var(--text-body);
            }
        }
    }
    
`