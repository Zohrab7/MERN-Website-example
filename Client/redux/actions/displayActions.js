export const setCategory = name => {
    return (
        {
            type: "SET_CATEGORY",
            payload: new Promise((resolve, reject) =>setTimeout(resolve, 500, name))
        });
};

