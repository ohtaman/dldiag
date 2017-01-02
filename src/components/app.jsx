import React from 'react';
import AppBar from 'material-ui/AppBar';

import './app.css';
import ToolBar from './tool-bar';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppBar title="DLDiag" />
        <ToolBar />
        <div className="contents" >コンテンツ</div>
      </div>
    );
  }
};

export default App;