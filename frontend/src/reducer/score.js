import {createStore} from 'redux';

function loadState (){
    const state = localStorage.getItem('score');
   
    if(state !== null){
        return JSON.parse(state);
    }
    
    return{
        score:[]
    }
  

}


function saveState (state){
    console.log("savestate....")
    localStorage.setItem('score', JSON.stringify(state))
}

const state ={
    score:0
}
const rootReducer = (state , action  ) =>{
   
   var x =  parseInt((state.score)+1);  

    switch(action.type){
    case "INCREASE":
    
    console.log(x)
      return{score : x  }
       default:
          {return state;}
    }
   

}



const store = createStore(rootReducer,loadState ());

store.subscribe((s) =>{
    saveState(store.getState)
});

export default store;


// function loadState (){
//     const state = localStorage.getItem('score');
//     if(state !== null){
//         return JSON.parse(state);
//     }
    
//     return{
//         score:[]
//     }
    
// }

