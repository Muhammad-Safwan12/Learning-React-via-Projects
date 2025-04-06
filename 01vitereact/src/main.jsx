import React from 'react'
import ReactDom from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click me to visit google'
) 

ReactDom.createRoot(document.getElementById('root')).
render(

  <App />
)
