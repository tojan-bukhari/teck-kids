// action is function returns an obj 
// its like you are saying that im hungry but you wont feed your self 
// action dose not do any thing

// TO IMPORT THIS FILE ONLY HAVE TO SAY "./actions" it will acsess "/index.js" by default 

export const increment = (nr) => {
    return {
           type: "INCREMENT",
           payload: nr
    };   
};

export const decrement = () => {
    return {
            type: "DECREMENT"
    };
};

export const signin = (th) => {
    return {
        type: "SIGNIN",
        playload: th
    };
};

