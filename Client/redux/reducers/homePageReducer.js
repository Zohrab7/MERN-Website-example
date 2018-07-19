export const Home_page_reducer = (state={}, action) => {
    switch (action.type) {
        case "SET_LOADER":
            state = {
                ...state,
                defHeader:action.payload,
                defImgSrc:action.payload2
            };
            break;
    }
    return state;
};