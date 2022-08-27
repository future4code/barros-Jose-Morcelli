import styled from 'styled-components'

export const Title = styled.h1 `
    text-align: center;
`
export const Span = styled.span `
    font-weight: bold;
    font-size: 23px;
    font-family: 'Jolly Lodger', cursive;
    color: #6A5ACD;
    margin: 10px;
`

export const ListTrip = styled.div `
    padding: 10px 5px;
    box-sizing: border-box;
    width: 600px;
    border: var(--state-blue) 2px solid;
    box-shadow: inset 0 0 32px 0 var(--state-blue), 0 0 32px 0 var(--state-blue);
    border-radius: 16px;
    list-style: none;
    line-height: 1.7;
    font-size: 14px;
    font-family: 'DynaPuff', cursive;
    margin: 3px;
    background-color: var(--white);
`
export const Trips = styled.div `
    width: 660px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
`