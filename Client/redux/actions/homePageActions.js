export const set_Typing= (bool) => {
    return ({
        type: "SET_TYPING",
        payload:bool
    })
};

export const set_Loader= (header,imgSrc) => {
    return ({
        type: "SET_LOADER",
        payload: header,
        payload2: imgSrc
    })
};
