import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
const Body=()=>{
    const appLayout=createBrowserRouter([
        {path:"/",
          element:<Login/>
        },
        {path:"/browse",
          element:<Browse/>
        }
      ])
      return(
        <RouterProvider router={appLayout}></RouterProvider>
      )
}
export default Body