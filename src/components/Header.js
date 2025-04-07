import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const user = useSelector((store) => store.user);
    const navigate=useNavigate()
    const handleSignout=()=>{
        signOut(auth).then(()=>{
            navigate("/")
        }).catch((e)=> navigate("/error"))
    }
  return (
    <div className=" w-screen bg-black flex justify-between z-10">
    <img
      className="h-20 px-20 filter brightness-75 contrast-295"
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="Netflix Logo"
    />
    <div className='flex'>
{user && (
    <img
      className='w-12 h-12 rounded-full'
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