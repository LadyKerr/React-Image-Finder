import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import SearchBar from './components/searchbar/SearchBar';

function App() {
  return (
    <MuiThemeProvider>
      <NavBar />
      <SearchBar />
    </MuiThemeProvider>
  );
}

export default App;
