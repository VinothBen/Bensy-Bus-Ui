import HeaderConstants from "./Header.Constant";
import Constants from "../../ConstantValues";
import axios from "axios";
import localDb from "../../../localDb.json"
const homePageAPI_URL = Constants("homePageAPI");

export const headerPageAPISuccess = (data) =>{
    return {
        type : HeaderConstants.UPDATE_HEADER_CONFIG,
        data
    };  
}
export const getHomePageConfig = () =>{
    return function(dispatch, getState){
        console.log("...thunk_State",getState);
        axios.get(homePageAPI_URL)
            .then((response)=>{
                    return response.data;
            })
            .then((json)=>{
                dispatch(headerPageAPISuccess(json));
            })
            .catch(error=>{
                console.log(error);
                dispatch(headerPageAPISuccess(localDb.home));
            }) 
     }
}