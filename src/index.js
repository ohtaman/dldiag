import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import Theme from './theme';
import configureStore from './store/configure-store';
import AppContainer from './containers/app-container';

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
