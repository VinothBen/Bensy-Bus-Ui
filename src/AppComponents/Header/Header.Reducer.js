import HeaderConstants from "./Header.Constant";
 
const initialState={
   config:"",
 };

 function HeaderReducer(state=initialState, action){
  switch(action.type){
    case HeaderConstants.UPDATE_HEADER_CONFIG:
        return Object.assign({}, state, {config:action.data});
    default:
        return state;
  }
 }
 export default HeaderReducer;
 export {initialState};