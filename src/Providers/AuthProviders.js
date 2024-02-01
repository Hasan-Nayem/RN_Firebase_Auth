import React, {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();
const AuthProviders = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(JSON.stringify(currentUser));
  //   const provider = new  googleAuth
  const signInWithEmailPassword = () => {
    auth()
      .createUserWithEmailAndPassword(
        'doe@example.com',
        'SuperSecretPassword!',
      )
      .then((res) => {
        console.log('User account created & signed in!', res);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  // const logout = () => {
  //   auth()
  // .signOut()
  // .then(() => console.log('User signed out!'));
  // };
  // Handle user state changes

  function onAuthStateChanged(user) {
    setCurrentUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const authInfo = {currentUser, signInWithEmailPassword};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
