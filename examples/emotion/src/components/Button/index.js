import React from 'react';
import styled from 'emotion/react'
import color from '../../../../../design-tokens/color'
import spacing from '../../../../../design-tokens/spacing'


const Button = styled.button`
  name: theButton;
  margin-bottom: ${spacing.small}
  background: ${props => props.primary ? color.primary : color.secondary};
  color: ${props => props.primary ? color.secondary : color.primary};
  border: none;
  padding: ${spacing.medium};
  border-radius: 5px;
  &:hover {
    background: ${color.tertiary};
    color: ${color.primary};
  }
`;

export default Button;
