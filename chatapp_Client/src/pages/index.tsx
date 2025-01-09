import 'uikit/dist/css/uikit.css'
import { useState, useEffect } from 'react';
import LogIn from '../components/login/login.tsx';
import axios from 'axios'

//Check if connecting machine has a session open already, if it doesnt then re-route to [sessionId]/home
//(On Backend)

export default function index(){
  const [requestStatus, setRequestStatus] = useState('');
  const [requestResult, setRequestResult] = useState('');

  //Add timeout for error occuring
  
  if (requestStatus == ''){

    validateSession().then(function(res){
      
      setRequestResult(res.data)
      setRequestStatus('complete')
    });
    
    setRequestStatus('pending');
    

    
  }
  else if(requestStatus == 'pending'){
    return(<><h1>Loading...</h1></>)
  }
  else if(requestStatus == 'complete'){
    if (requestResult == 'valid'){
      return(<>Home Screen!</>);

    }
    else if(requestResult == 'invalid'){
      return(<><LogIn></LogIn></>);
    }

  }

}






async function validateSession() {
   const fetchData = async () => {
      return (await axios.get('http://localhost:5174')); 
         
    };

    return(fetchData()) 
}




