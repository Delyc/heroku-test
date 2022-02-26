import React, {useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

export default function Google() {
    const clientId="583371354557-oj2mn29eih6004btma89tba8f50s52k7.apps.googleusercontent.com"

    const [showLoginButton, setShowLoginButton] = useState(true);
    const[showLogoutButton, setShowLogoutButton] = useState(false);

    const onLoginSuccess= (res) =>{
        console.log('Login success:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }

    const onFailureSuccess= (res) =>{
        console.log('login failed:', res);
    }

    const onSignoutSuccess= () =>{
        alert("you have been signed out successfully");
        setShowLoginButton(true);
        setShowLogoutButton(false);

    }



  return (
    <div>
        <h1>Hi</h1>

        {showLoginButton?


         <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
  /> : null
        }

        {showLogoutButton?

<GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout> :null
}

    </div>
  )
}
