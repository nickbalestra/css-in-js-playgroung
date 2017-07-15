const React = require('react')
const { renderToString } = require('react-dom/server')
const styled = require('emotion/react').default
const { extractCritical } = require('emotion/server')
const Button = require('./src/components/Button')

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
