export const setSlideUp = name => {
    return (
        {type: "SlideUp", payload: name}
    );
};
export const setSlideDown = name => {
    return (
        {type: "SlideDown", payload: name}
    );
};
