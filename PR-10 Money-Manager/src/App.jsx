import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import MoneyManager from './redux/MoneyManager'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <MoneyManager/>
      </Provider>
    </div>
  )
}
