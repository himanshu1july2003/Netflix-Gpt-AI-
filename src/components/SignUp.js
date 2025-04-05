import React from 'react';

const SignUp = ({ change }) => {
  return (
    <div>
      <div className="bg-black/70 p-8 rounded-md max-w-sm w-full space-y-6">
        <h2 className="text-3xl font-semibold">Sign In</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none"
          />
        </div>

        <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold">
          Sign Up
        </button>

        <div className="text-center text-gray-400 text-sm">OR</div>

       

        <div className="text-center">
          <a
            className="text-sm text-blue-400 hover:underline cursor-pointer"
          >
            Forgot password?
          </a>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <p>
            <button 
            onClick={() => change(true)}
            className="text-white hover:underline">
              Sign up now.
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
