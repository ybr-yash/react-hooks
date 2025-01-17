import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffectHook = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          setData(response.data[count].email);
          console.log("API WAS CALLED");
        });
    }, [count]);
  
    return (
      <div>
        Hello World
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div>
    );
}

export default UseEffectHook