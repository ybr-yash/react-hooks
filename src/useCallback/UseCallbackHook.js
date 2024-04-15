import React, { useCallback, useState } from 'react';
import Child from './Child';

const UseCallbackHook = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Hi! Welcome to Callback demo!");
  
    const returnComment = useCallback(
      (name) => {
        return data + name;
      },
      [data]
    );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  )
}

export default UseCallbackHook