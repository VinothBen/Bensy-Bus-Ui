import HeaderConstants from "./Header.Constant";

export const getHeaderConfig = (data) =>{
    console.log(data);
    return {
        type:HeaderConstants.GET_HEADER_CONFIG,
    };
}