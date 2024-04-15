import React, { useContext } from 'react';
import { AppContext } from './UseContextHook';

const EnteredText = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>EnteredText: {userName}</div>
  )
}

export default EnteredText