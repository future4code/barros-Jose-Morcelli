import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --state-blue: #6A5ACD;
    --white: #f2f2f2;
    --dark-gray: #444444;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jolly Lodger', cursive;
    }`

export const Pages = styled.div`
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: (--white);
`

export const Title = styled.h1`
    color: var(--state-blue);
    font-size: 5rem;
`

export const Button = styled.button`
    background-color: var(--state-blue);
    color: var(--white);
    border-radius: 10px;
    width: 120px;
    margin: 6px;
    padding: 15px;
    border: solid 1px var(--state-blue);
    box-shadow: 3px 1px 8px #aaa;
    :hover {
        cursor: pointer;
        border: 1px solid var(--state-blue);
        background-color: var(--white);
        color: var(--state-blue)
    }
    :active {
        transform:scale(0.98)
    }
`

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;`