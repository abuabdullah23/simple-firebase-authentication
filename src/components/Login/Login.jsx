import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    // display user info
    const [user, setUser] = useState(null)

    // google auth method
    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();

    // Sign in Method
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    // sign out method
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })

    }



    return (
        <div>

            {/* user ? log out : sign in */}

            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <button onClick={handleGoogleSignIn}>Google login</button>
            }

            {
                user && <div>
                    <h3>User: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user?.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;