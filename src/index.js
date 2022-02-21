import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './sass/main.scss'
import './i18n'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}

export default App
