export const setClass = (name,time=100) => {
    return ({
        type: "SET_CLASS",
        payload: new Promise((resolve, reject) =>setTimeout(resolve, time, name))
    });
};