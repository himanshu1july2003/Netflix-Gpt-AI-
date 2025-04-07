import React, { useRef, useState } from 'react';
import { checkvalidation } from '../utils/checkvalidation';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ change }) => {
  const navigate = useNavigate();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [mess, setMess] = useState(null);

  const handleSignUp = async () => {
    const nameVal = name.current.value;
    const emailVal = email.current.value;
    const passwordVal = password.current.value;
    const confirmPasswordVal = confirmPassword.current.value;

    // Basic validations
    if (!nameVal || !emailVal || !passwordVal || !confirmPasswordVal) {
      setMess("Fill all the details !!");
      return;
    }

    if (passwordVal !== confirmPasswordVal) {
      setMess("Passwords do not match !!");
      return;
    }

    const validationResult = checkvalidation(nameVal, emailVal, passwordVal);
    if (validationResult !== null) {
      setMess(validationResult);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailVal, passwordVal);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: nameVal,
        photoURL:
          "https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      });

      // Navigate to browse page
      navigate('/browse');
    } catch (error) {
      setMess(`${error.code} - ${error.message}`);
    }
  };

  return (
    <div>
      <div className="bg-black/70 p-8 rounded-md max-w-sm w-full space-y-6">
        <h2 className="text-3xl font-semibold">Sign Up</h2>
        <div className="space-y-4">
          <input
            ref={name}
            type="text"
            placeholder="Your Name"
            className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
          />
          <input
            ref={email}
            type="text"
            placeholder="Your Email"
            className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
          />
          <input
            ref={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
          />
          <p className="text-red-400">{mess}</p>
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            onClick={handleSignUp}
            className="w-full cursor-pointer flex items-center justify-center bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
          >
            Sign Up
          </button>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <p>
            Already have an account?{' '}
            <button onClick={() => change(true)} className="text-white hover:underline">
              Sign In
            </button>
          </p>
        </div>

        <p className="text-xs text-gray-500 leading-tight">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <a href="#" className="text-blue-400 hover:underline">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
