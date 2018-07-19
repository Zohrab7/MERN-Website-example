export const Slider_reducer = (state={}, action) => {
    switch (action.type) {
        case "SlideUp":
            state = {
                ...state,
                value: state.value + action.payload
            };
            break;
        case "SlideDown":
            state = {
                ...state,
                value: state.value - action.payload
            };
            break;
        case "SET_CLASS_FULFILLED":
            state = {
                ...state,
                defAnimClass: action.payload
            };
            break;
    }
    return state;
};