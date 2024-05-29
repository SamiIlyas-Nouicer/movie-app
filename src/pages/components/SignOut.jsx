// components/SignOut.js
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
