     
     
     import axios from 'axios';


    const url = "http://localhost:8000";

  
    export const loginRes = (user) => axios.post(url+'/api/login' ,  user)
