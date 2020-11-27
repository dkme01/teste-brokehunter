import React from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/globals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
