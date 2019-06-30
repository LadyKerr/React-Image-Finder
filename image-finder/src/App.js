import React from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <SearchBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
