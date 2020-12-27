// cosider object that tell reducer how to change data ...
 const x= (state = [], action)=> { 
    //the action should contain type  .... 
    switch (action.type){
        // any name express to it job 
        case 'FETCH_USER':
            return [state,action.payload];  
           
    default:
           return 0;
    }
}
export default x;


    
    
