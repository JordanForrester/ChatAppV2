import { useState } from 'react';
import axios from 'axios';

function verifyFormat(){// Makes sure the data is correct for storage
    const emailRegex = new RegExp('/^(\w*@\w*.\w{3})$/gm', 'x'); 
    const stringLimiterRegex = new RegExp('/^\w{1,30}$/gm', 'x');
    const phoneNumberRegex = new RegExp('/^\w{1,30}$/gm', 'x'); 
}

function SignUp(){
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [passwordTwo, setPasswordConfirm] = useState('');
        const [birthyear, setBirthYear] = useState('');
        const [email, setEmail] = useState('');
        const [number, setNumber] = useState('');

        async function submitData(){
            axios.post('http://localhost:5174/signup',{
                username : username.toString(),
                password : password.toString(),
                email : email.toString(),
                number : number.toString(),
                birthyear: birthyear.toString(),
            });//No magic strings


            
        }

        function handleChange(e: any) {
            //func for updating state values

            let dataValue = e.target.value;
            switch(e.target.id){
                
                case 'userField':
                    setUsername(dataValue);
                    break;
                
                case 'emailField':
                    setEmail(dataValue);
                    break;

                case 'passwordField':
                    setPassword(dataValue);
                    break;

                case 'passwordFieldTwo':
                    setPasswordConfirm(dataValue);
                    break;   

                case 'numberField':
                    setNumber(dataValue);
                    break;
                case 'birthYear':
                    setBirthYear(dataValue);
                    break;
            }
            
        }


    return(
        <>
            <div className="uk-card uk-card-default uk-card-body uk-width-3-5@m">
                <h3 className="uk-card-title uk-heading-divider uk-text-lead">Please fill in your information below.</h3>
                <fieldset className="uk-fieldset">

                    <input  id='userField' className="uk-input uk-margin-small" type="text" placeholder="Create your username" aria-label="Input" value={username} onChange={handleChange}></input>   
                     
                    <input id='emailField' className="uk-input uk-margin-small" type="text" placeholder="Enter your e-mail" aria-label="Input" value={email} onChange={handleChange}></input>

                    <input id='passwordField' className="uk-input uk-margin-small" type="password" placeholder="Create a password" aria-label="Input" value={password} onChange={handleChange}></input>

                    <input id='passwordFieldTwo' className="uk-input uk-margin-small" type="password" placeholder="Confirm Password" aria-label="Input" value={passwordTwo} onChange={handleChange}></input>

                    <input id='numberField' className="uk-input uk-margin-small" type="text" placeholder="Enter your phone number(optional)" aria-label="Input" value={number} onChange={handleChange}></input>

                    <input id='birthYear' className="uk-input uk-margin-small" type="text" placeholder="Enter your birth year" aria-label="Input" value={birthyear} onChange={handleChange}></input>


                    <button className="uk-button uk-margin-top uk-button-primary" onClick={submitData}>Create Account</button>
                </fieldset>



            </div>
        </>
    )
}
export default SignUp