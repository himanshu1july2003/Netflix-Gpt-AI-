import React from 'react';

const SignIn = ({ change }) => {
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
        </div>

        <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold">
          Sign In
        </button>

        <div className="text-center text-gray-400 text-sm">OR</div>

        <button className="w-full bg-gray-300 text-black py-2 rounded font-medium">
          Use a sign-in code
        </button>

        <div className="text-center">
          <a
            className="text-sm text-blue-400 hover:underline cursor-pointer"
          >
            Forgot password?
          </a>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-red-600" />
            <span>Remember me</span>
          </label>
          <p>
            New to Netflix?{' '}
            <button 
            onClick={() => change(false)}
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

export default SignIn;
