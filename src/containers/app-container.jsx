import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppActions from '../actions/app-actions';

class AppContainer extends React.Component {
    render() {
        return (
            <div>Application</div>
        );
    }
};
 
function mapStateToProps(state, props) {
    return {
    };
};

 function mapDispatchToProps(dispatch) {
     return {
         actions: bindActionCreators(AppActions, dispatch)
    };   
};
 
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);