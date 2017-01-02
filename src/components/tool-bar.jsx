import React from 'react'

import './tool-bar.css';
import {Card, Menu, MenuItem} from 'material-ui';

class ToolBar extends React.Component {
  render() {
    return (
      <Card className="tool-bar">
        <Menu>
          <MenuItem primaryText="Nodes" />
          <MenuItem primaryText="Connectors" />
        </Menu>
      </Card>
    );
  }
};

export default ToolBar;