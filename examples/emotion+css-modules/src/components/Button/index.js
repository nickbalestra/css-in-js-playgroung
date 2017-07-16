import React from 'react';
import styled from 'emotion/react';
import color from '../../../../../design-tokens/color';
import spacing from '../../../../../design-tokens/spacing';
import styles from './styles.css';

const Button = styled.button`
  name: theButton;
  composes: ${styles.button};
  margin-bottom: ${spacing.small}
  background: ${props => (props.primary ? color.primary : color.secondary)};
  color: ${props => (props.primary ? color.secondary : color.primary)};
  padding: ${spacing.medium};
  &:hover {
    background: ${color.tertiary};
    color: ${color.primary};
  }
`;

export default Button;
