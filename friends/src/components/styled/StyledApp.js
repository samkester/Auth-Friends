import styled from "styled-components";

export default styled.div`
    color: ${props => props.theme.color.app};
    background: ${props => props.theme.background.app};

    ${props => props.theme.flexCentered}
    ${props => props.theme.appSizing}

    .container{
        color: ${props => props.theme.color.container};
        background: ${props => props.theme.background.container};

        ${props => props.theme.flexCentered}
        ${props => props.theme.containerSizing}
    }
`;