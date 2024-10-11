import React from 'react'
import Context from './ContextApi/Context'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import ReduxCounter from './Redux/ReduxCounter'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ReduxCounter/>
      </Provider>
    </div>
  )
}
