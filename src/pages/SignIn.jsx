import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase";
import poster from "./assets/posters.jpg";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-blue-dianne-700">
      <div className="flex justify-center items-center h-2/3 w-1/2 border-0 rounded-lg bg-derby-200">
        <div className=" h-full w-full ">
          <Image
            src={poster}
            alt="poster"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <form
          onSubmit={handleSignIn}
          className="flex flex-col h-full w-full justify-center items-center relative"
        >
          <h1 className="text-2xl text-center absolute top-20 font-bold">
            Welcome to Movi<span className="text-derby-800">Wise!</span>
          </h1>
          <div className="w-2/3 m-2 p-2 relative flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-7 text-spicy-mix-700   hover:text-spicy-mix-700  cursor-pointer "
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="pl-2 pr-2  text-center border rounded-lg w-full m-2 p-2 focus:none"
            />
          </div>
          <div className="w-2/3 m-2 p-2 relative flex items-center">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-7 text-spicy-mix-700   hover:text-spicy-mix-700  cursor-pointer "
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="pl-2 pr-2  text-center border rounded-lg w-full m-2 p-2 focus:none"
            />
          </div>
          <button
            type="submit"
            className="p-4 w-2/3 border rounded-full bg-blue-dianne-700 text-white hover:bg-blue-dianne-900 transition duration-300 ease-in-out m-2"
          >
            Sign In
          </button>
          <a className="absolute bottom-5 cursor-pointer font-semibold">
            Create an account ?
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
