import styled from "styled-components";

export default styled.div`
    ${props => props.theme.flexCentered}
    width: 100%;

    h1{
        font-size: 4.8rem;
        font-style: italic;
    }

    h2{
        margin-top: 1rem;
        font-size: 2.6rem;
        font-style: italic;
    }

    button{
        margin: 1em; padding: 0.5em 2em;
        color: currentColor;
        background: transparent;
        border: 1px solid currentColor;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }

    .list{
        ${props => props.theme.flexCentered}
        color: ${props => props.theme.color.list};
        background: ${props => props.theme.background.list};
        width: 90%;
        padding: 0.25em;
        border-radius: 5px;
    }
`;