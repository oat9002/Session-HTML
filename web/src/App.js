import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormShow from './FormShow'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <FormShow></FormShow>
      </MuiThemeProvider>
    );
  }
}

export default App;
