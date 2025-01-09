import 'uikit/dist/css/uikit.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function LogIn()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   async function onSubmit(e: any){
        
        e.preventDefault();
        console.log(username);
        console.log(password);

        const res = await axios({
            method: 'post',
            url: 'http://localhost:5174',//Get From URL bar beforehand

            data: {
              userName: username,
              password: password
            }
          }).catch(

          );
        
          
    }; 

    

    function handleUserChange(e: any) {
        setUsername(e.target.value);
      }
    
    function handlePasswordChange(e: any) {
        setPassword(e.target.value);
      }



return(

<>

<div className="uk-card uk-card-default uk-card-body uk-width-2-1@m">
    <h3 className="uk-card-title uk-heading-divider uk-text-lead">Welcome to Chat-App!</h3>
    <p className='uk-text-meta'>
        Sign in below or click here to create a new account!
    </p>
    <form onSubmit={onSubmit}>
    <fieldset className="uk-fieldset">

            <input className="uk-input uk-margin-small" type="text" placeholder="UserTag or Email" aria-label="Input" value={username} onChange={handleUserChange}></input>
       
            <input className="uk-input uk-margin-small" type="password" placeholder="Password" aria-label="Input" value={password} onChange={handlePasswordChange}></input>
        
            <button className="uk-button uk-margin-top uk-button-primary" >Submit</button>
    </fieldset>
</form>



</div>


</>

)

}
