// reducer its a function that updates our store depends on the action that passed in to it 
// im hungry >> the action 
// fead him >> reducer 

const counterReducer = (state = 0, action) => {
    // const because im not gonna reassign this function 
    switch(action.type) {
        case "INCREMENT" : 
            return state + action.payload; 
        case "DECREMENT" :
            return state -1
        default : return state;        
    }
}
export default counterReducer;