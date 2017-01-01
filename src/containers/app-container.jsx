import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from '../components/app'
import * as AppActions from '../actions/app-actions';

class AppContainer extends React.Component {
    render() {
        return (
            <App />
        );
    }
};
 
function mapStateToProps(state, props) {
    return props;
};

 function mapDispatchToProps(dispatch) {
     return {
         actions: bindActionCreators(AppActions, dispatch)
    };   
};
 
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);