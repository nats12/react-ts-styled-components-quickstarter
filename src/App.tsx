import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import logo from './logo.svg';
import './App.css';
import theme from './theme/index';
import Button from './buttons/Button';

const GlobalStyle = createGlobalStyle`
  button {
    border: none;
    border-radius: 4px;
    padding: 20px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        <Button />
        </header>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
