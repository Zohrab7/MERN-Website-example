export const Display_reducer = (state={}
    , action) => {
    switch (action.type) {
        case "SET_CATEGORY_FULFILLED":
            state = {
                ...state,
                displayData: action.payload
            };
            break;
    }
    return state;
};