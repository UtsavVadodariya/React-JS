import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import TodoRedux from './Redux/TodoRedux'

export default function App() {
  return (
    <div>
        <Provider store={store}>
          <TodoRedux/>
        </Provider>
    </div>
  )
}
