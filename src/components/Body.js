import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/slice";
const Body=()=>{
  const dispatch=useDispatch()
    const appLayout=createBrowserRouter([
        {path:"/",
          element:<Login/>
        },
        {path:"/browse",
          element:<Browse/>
        }
      ])
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          }
           else {
            dispatch(removeUser()); // ✅ properly clear the user
          }
        });
      }, []);
      
      return(
        <RouterProvider router={appLayout}></RouterProvider>
      )
}
export default Body