import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    // display user info
    const [user, setUser] = useState(null)

    // google auth method
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    // gitHub auth
    const githubProvider = new GithubAuthProvider();

    // Google Sign in Method
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    // Github Sign In
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setUser(loggedUser)

        })
        .catch(error =>{
            console.log(error)
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
                    <>
                        <button onClick={handleGoogleSignIn}>Google login</button>
                        <button onClick={handleGithubSignIn}>Github Login</button>

                    </>
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