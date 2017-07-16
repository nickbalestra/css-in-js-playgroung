import React from 'react';
import { renderToString } from 'react-dom/server';
import styled from 'emotion/react/macro';
import { extractCritical } from 'emotion/server';
import Button from './src/components/Button';

const CustomButton = styled(Button)`
  background: black;
  color: white;
`;

const Fragment = () =>
  <div>
    <Button>A Default Button</Button>
    <Button primary>A Primary Button</Button>
    <CustomButton>A Custom Button</CustomButton>
  </div>;

const { html, ids, css } = extractCritical(renderToString(<Fragment />));

console.log('HTML:\n======\n', html);
console.log('\nIDs:\n======\n', ids);
console.log('\nCSS:\n======\n', css);
