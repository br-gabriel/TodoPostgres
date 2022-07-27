import styled from "styled-components";

export const MainHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    color: var(--text-title);
    padding: 4rem 3rem;

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