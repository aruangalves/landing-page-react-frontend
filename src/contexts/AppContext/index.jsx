import props from 'prop-types';
import { createContext, useState } from 'react';

export const globalData = {
  apiUrl: 'http://localhost:1337',
};

export const GlobalContext = createContext();

export const AppProvider = ({children}) => {
  const [state, setState] = useState(globalData);

  typeof setState;

  return <GlobalContext.Provider value={state}>
    {children}
  </GlobalContext.Provider>
};

AppProvider.propTypes = {
  children: props.oneOfType([props.string, props.element, props.node]).isRequired,
};
