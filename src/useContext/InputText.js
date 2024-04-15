import React, { useContext } from 'react';
import { AppContext } from './UseContextHook';

const InputText = () => {
  const { setUserName } = useContext(AppContext)
  return (
    <div>
      <input
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  )
}

export default InputText