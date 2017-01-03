import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class ToolBar extends React.Component {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem primaryText="Nodes" />
          <MenuItem primaryText="Connectors" />
        </Menu>
      </div>
    );
  }
};

export default ToolBar;