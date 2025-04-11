import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp'; 
const Login = () => {
  const [signin, setsignin] = useState(true);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/browse");
  }, [user]);
  return (
    <div className="relative h-screen text-white">
      <div className="absolute inset-0 brightness-50 bg-cover h-screen pointer-events-none -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-3 left-6 z-10">
        <img
          className="h-20 px-35 filter brightness-75 contrast-295"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>

      {/* Login Form */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
        { signin?<SignIn change={setsignin} /> : <SignUp change={setsignin}/>}
      </div>
    </div>
  );
};

export default Login;
