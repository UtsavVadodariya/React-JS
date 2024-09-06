import React from 'react'
import { useState } from 'react'

export default function Function() {
  const [count, setCount] = useState(0)
  const reset = () => {
    const userConfirmed = window.confirm("Are you sure you want to reset?");
    if (userConfirmed) {
      setCount(0);
    }
  }

  return (
    <div className='main1'>
      <div className="main">
        <center>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)} className='button creative-button'>Increace</button>
          <button onClick={() => setCount(count - 1)} className='button'>Decreace</button>
          <button onClick={reset} className='button bubbly-button'>Reset</button>
        </center>
      </div>
    </div>
  )
}
