import styled from "styled-components";

export default styled.div`
    color: ${props => props.theme.color.item};
    background: ${props => props.theme.background.item};

    ${props => props.theme.flexCentered}

    min-width: 50%;
    margin: 0.25em; padding: 0.25em;
    border-radius: 5px;

    a, button{
        color: currentColor;
        font-size: 1.6rem;
        background: transparent;
        font-weight: bold;
        text-decoration: none;
        border: 1px solid currentColor;
        border-radius: 5px;
        margin: 0.25em; padding: 0.25em 1em;
        cursor: pointer;
    }

    input{
        font-size: 1.4rem;
        margin-left: 0.25em;
        color: currentColor;
        background: transparent;
        border: 1px dashed currentColor;
        border-bottom-style: solid;
        padding: 0 0.125em;
    }
`;