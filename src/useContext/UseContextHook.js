import React, { useState, createContext } from 'react';
import InputText from './InputText';
import EnteredText from './EnteredText';

export const AppContext = createContext(null)

const UseContextHook = () => {
  const [userName, setUserName] = useState('')
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <InputText /> <EnteredText />
    </AppContext.Provider>
  )
};

export default UseContextHook;