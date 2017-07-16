import React from 'react';
import { render } from 'react-dom';
import styled from 'emotion/react/macro';
import { injectGlobal } from 'emotion';
import Button from './components/Button';

const CustomButton = styled(Button)`
  background: black;
  color: white;
`;

injectGlobal`
  * {
    font-weight: 800;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;

render(<Button>A Default Button</Button>, document.getElementById('one'));
setTimeout(
  () =>
    render(
      <Button primary>A Primary Button</Button>,
      document.getElementById('two')
    ),
  500
);
render(
  <CustomButton>A Custom Button</CustomButton>,
  document.getElementById('three')
);
