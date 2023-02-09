import { createBrowserRouter } from "react-router-dom";
import Root from '../../Root/Root'
import Room from "../Header/Room/Room";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const routes=createBrowserRouter([
{
    path:'/',element:<Root/>,children:[
        {
            path:'/',element:<Home/>,
            loader:async ()=>fetch(`hotelRoom.json`)
        },
        {
            path:'/room',element:<Room/>,
            loader:async ()=>fetch(`hotelRoom.json`)
        },
        {
            path:'/login',element:<Login/>
        },
        {
            path:'/register',element:<Register/>
        }
    ]
}
]);