import React from 'react'
import ControlledCo from './Coponents/ControlledCo'
import UnControlledCo from './Coponents/UnControlledCo'
import FormHandling from './Coponents/FormHandling'

export default function App() {
  return (
    <div>
      <ControlledCo/>
      <UnControlledCo/>
      <FormHandling/>
    </div>
  )
}
