import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { addUser,removeUser } from "../utils/slice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch=useDispatch()
    const user = useSelector((store) => store.user);
    const navigate=useNavigate()
    const handleSignout=()=>{
        signOut(auth).then(()=>{
            navigate("/")
        }).catch((e)=> navigate("/error"))
    }
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        }
         else {
          dispatch(removeUser());
        }
      });
    }, []);
  return (
    <div className="h-2/12 w-screen bg-black flex justify-between z-10">
      <div className='h-12/12 flex justify-center items-center gap-5'>
    <img
      className="h-13 px-13 filter brightness-75 contrast-295 "
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="Netflix Logo"
    />
    <a href='' className='text-white text-[14px]'>Home</a>
    <a href='' className='text-white text-[14px]'>TV Shows</a>
    <a href='' className='text-white text-[14px]'>Movies</a>
    <a href='' className='text-white text-[14px]'>New & Popular</a>
    <a href='' className='text-white text-[14px]'>My List</a>
    <a href='' className='text-white text-[14px]'>Browse by Languages</a>
    </div>
    <div className='flex gap-4 items-center mx-7'>
{user && (
    <img
      className='w-8 h-8'
      src={user.photoURL}
      alt='User Avatar'
    />
  )}
    <button onClick={handleSignout} className='text-white cursor-pointer'>SignOut</button>
    </div>
  </div>
  )
}

export default Header