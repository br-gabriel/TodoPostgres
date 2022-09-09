import styled from "styled-components";

export const MainHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    color: var(--text-title);
    padding: 4rem 3rem;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        
        div {
            margin: 1.5rem 0 -2rem;

            input {
                width: 20rem;
            }
        }
    }

    @media (max-width: 425px) {        
        div {
            input {
                width: 15rem;
            }
        }
    }

    @media (max-width: 360px) {        
        h1 {
            font-size: 1.7rem;
        }
        
        div {
            input {
                width: 12rem;
            }
        }
    }

    @media (max-width: 360px) {        
        padding: 2rem 1rem;
        
        h1 {
            font-size: 1.2rem;
        }
        
        div {
            input {
                width: 10.5rem;
            }
        }
    }

    div {
        display: flex;
        align-items: center;
        flex-direction: row;

        input {
            border: none;
            border-radius: .5rem;
            background-color: var(--input-background);
            padding: 1rem;
            font-size: 1rem;

            margin-right: 1rem;
        }

        ::-webkit-input-placeholder { /* Edge */
            color: var(--text-body);
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--text-body);
        }

        ::placeholder {
          color: var(--text-body);
        }

        button {
            border: none;
            border-radius: .5rem;
            background-color: var(--green);
            width: 3.52rem;
            height: 3.52rem;

            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: #32991c;
                transition: .2s;
            }
        }
    }
    
`