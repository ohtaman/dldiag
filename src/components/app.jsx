import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import './app.css';
import ToolBar from './tool-bar';
import Diagram from './diagram';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppBar title="DLDiag" />
        <Paper className="tool-bar">
          <ToolBar />
        </Paper>
        <Paper className="contents">
          <Diagram />
        </Paper>
      </div>
    );
  }
};

export default App;