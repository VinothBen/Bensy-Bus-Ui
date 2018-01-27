import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Header from "./Header";
import * as HeaderActions from "./Header.Actions";
export default connect(
    (state)=>{
       return {
                config: state.headerReducer.config,
                data: state.headerReducer.data
              };
},
    (dispatch)=>{
        return {
                actions: bindActionCreators(HeaderActions, dispatch)
        };
}
)(Header);