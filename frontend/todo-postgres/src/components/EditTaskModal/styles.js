import styled from "styled-components";

export const Container = styled.form `
    h2 {
        color: var(--text-title);
        margin-bottom: 1rem;
    }

    input {
        border: none;
        border-radius: .5rem;
        background-color: var(--input-background);
        padding: .7rem;
        font-size: 1rem;

        width: 100%;

        color: var(--text-title);
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: right;
        gap: 1rem;

        margin-top: 1rem;

        .cancelButton {
            background: transparent;
            color: var(--text-body);
            border: none;

            &:hover {
                filter: brightness(0.5);
                transition: .2s;
            }
        }

        .updateButton {
            color: white;
            background-color: var(--green);
            padding: .8rem;

            border: none;
            border-radius: .2rem;

            &:hover {
                filter: brightness(0.9);
                transition: .2s;
            }
        }
    }
    
`