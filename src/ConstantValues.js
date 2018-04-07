const values = {
    "homePageAPI" : "http://localhost:8022/BensyBus/home"
};
function getConstants(key){
    return values[key];
};
export default getConstants;