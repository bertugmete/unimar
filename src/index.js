import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './sass/main.scss'
import './i18n'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}

export default App
