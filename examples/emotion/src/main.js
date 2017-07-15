import React from 'react'
import { render } from 'react-dom'
import styled from 'emotion/react'
import { injectGlobal } from 'emotion'
import Button from './components/Button'

const Component = props => (
  <Button {...props}>
    Hello emotion
  </Button>
)

const CustomComponent = styled(Component)`
  background: black;
  color: white;
`

injectGlobal`
  * {
    font-weight: 700;
  }
`

render(<Component/>, document.getElementById('one'))
setTimeout(() => render(<Component primary />, document.getElementById('two')), 500)
render(<CustomComponent/>, document.getElementById('three'))
