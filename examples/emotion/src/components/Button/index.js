const React = require('react');
const styled = require('emotion/react').default
const color = require('../../../../../design-tokens/color')
const spacing = require('../../../../../design-tokens/spacing')


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

module.exports = Button
