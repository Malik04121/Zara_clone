import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({children}){
  const {logindata}=useContext(AuthContext)
  if(logindata.length==0){
    return <Navigate to="/login"/>
  }
  return children

}
export default PrivateRoute