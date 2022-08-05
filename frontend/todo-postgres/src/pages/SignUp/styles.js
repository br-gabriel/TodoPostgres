import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .8rem;
    height: 100vh;

    p {
        color: var(--blue);
        font-size: 2rem;
        font-weight: 400;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    max-width: 350px;

    box-shadow: 4px 4px 8px rgba(39, 63, 172, 0.33);
    background-color: white;

    padding: 1.2rem;
    border-radius: .5rem;

    div {
        width: 100%;
        padding-left: 0.3rem;
        margin-bottom: 0.3rem;
        Label {
            text-align: left;
        }
    }
`;

export const Label = styled.label`
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-title);
`;

export const LabelSignIn = styled.label`
    font-size: 1.05rem;
    color: var(--text-title);
`;

export const LabelError = styled.label`
    font-size: 1rem;
    color: var(--red);
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: var(--text-title);

        &:hover {
            filter: brightness(1.9);
            transition: all .2s;
        }
    }
`;