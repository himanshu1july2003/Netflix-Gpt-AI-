import React, { useRef, useState } from "react";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const SignIn = ({ change }) => {
  const email = useRef(null);
  const password = useRef(null);
  const [mess, setMess] = useState(null);

  const navigate = useNavigate();

  const checkValidation = (e) => {
    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!mailRegex.test(e)) return "Email is not valid !!";
    return null;
  };

  const handleLogin = async () => {
    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    if (!emailVal || !passwordVal) {
      setMess("Fill all the details !!");
      return;
    }

    const validationError = checkValidation(emailVal);
    if (validationError) {
      setMess(validationError);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailVal, passwordVal);
      const user = userCredential.user;

      await updateProfile(user, {
        photoURL:
          "https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      });

      // Navigate to browse
      navigate("/browse");
    } catch (error) {
      setMess(error.message);
    }
  };

  return (
    <div>
      <div className="bg-black/70 p-8 rounded-md max-w-sm w-full space-y-6">
        <h2 className="text-3xl font-semibold">Sign In</h2>
        <div className="space-y-4">
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
          />
          <p className="text-red-400">{mess}</p>
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            onClick={handleLogin}
            className="w-full cursor-pointer flex items-center justify-center bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
          >
            Sign In
          </button>
        </div>

        <div className="text-center text-gray-400 text-sm">OR</div>

        <button className="w-full bg-gray-300 text-black py-2 rounded font-medium">
          Use a sign-in code
        </button>

        <div className="text-center">
          <a className="text-sm text-blue-400 hover:underline cursor-pointer">
            Forgot password?
          </a>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-red-600" />
            <span>Remember me</span>
          </label>
          <p>
            New to Netflix?{" "}
            <button onClick={() => change(false)} className="text-white hover:underline">
              Sign up now.
            </button>
          </p>
        </div>

        <p className="text-xs text-gray-500 leading-tight">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
