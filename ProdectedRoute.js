import {useSelector } from "react-redux";
import {Navigate, useNavigate } from "react-router-dom";
import Loader from "./Loader";

function ProdectedRoute({children,isAdmin}){
    const {user,isAuthenticateUser,loading}=useSelector(state=>state.userState)
    if(!isAuthenticateUser && !loading){
        return <Navigate to='/Login'/>
    }
    if(isAuthenticateUser){
        if(isAdmin===true && user.role !=='admin'){
            return <Navigate to='/'/>
        }
    return children;
    }
    if(loading){
        <Loader/>
    }
}
export default ProdectedRoute;