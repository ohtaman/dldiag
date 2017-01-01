import React from 'react'
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
  render() {
    return(
      <div className='app'>
        <AppBar title="DLDiag"
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
       テスト
      </div>
    );
  }
}

export default App;