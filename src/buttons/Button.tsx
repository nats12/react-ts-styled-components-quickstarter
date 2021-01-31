import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    margin: 25px 0%;
    color: ${props => props.theme.colours.react_blue};
    background-color: ${props => props.theme.colours.dark_grey};

`;

const Button = () => {

    return (
        <StyledButton>I'm using the theme colours!</StyledButton>
    )


}

export default Button;