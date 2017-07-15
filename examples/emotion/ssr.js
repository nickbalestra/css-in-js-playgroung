import React from 'react'
import { renderToString } from 'react-dom/server'
import styled from 'emotion/react'
import { extractCritical } from 'emotion/server'
import Button from './src/components/Button'

const App = props => (
  <Button {...props}>
    Hello emotion
  </Button>
)

const CustomApp = styled(App)`
  background: black;
  color: white;
`

const Fragment = () => (
  <div>
    <App/>
    <App primary />
    <CustomApp/>
  </div>
)

const { html, ids, css } = extractCritical(renderToString(<Fragment/>))

console.log('HTML:\n======\n', html)
console.log('\nIDs:\n======\n', ids)
console.log('\nCSS:\n======\n',css)
