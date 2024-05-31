// components/SignOut.js
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <button onClick={handleSignOut}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
};

export default SignOut;
