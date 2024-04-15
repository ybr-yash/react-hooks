import React, { useState } from 'react'

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('...')

  return (
    <div>
        <h1>useState Demo</h1>
        <h3>Counter</h3>
        <p>You have clicked {counter} times!</p>
        <button onClick={() => setCounter(counter+1)}>Click this button</button>
        <br/>
        <br/>
        <h3>Text Reader</h3>
        <input onChange={(e) => setText(e.target.value)} placeholder='Exter some text...'/>
        <p>You have entered <span style={{"fontWeight": "bold"}}>{text}</span> text!</p>
    </div>
  )
}

export default UseStateHook