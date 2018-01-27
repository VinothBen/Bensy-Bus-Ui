import HeaderConstants from "./Header.Constant";
 
const initialState={
   config:"",
   data:{}
 };

 function HeaderReducer(state=initialState, action){
  switch(action.type){
    case HeaderConstants.GET_HEADER_CONFIG:
        return Object.assign({}, state, {config:"asd"});
    default:
        return state;
  }
 }
 export default HeaderReducer;
 export {initialState};