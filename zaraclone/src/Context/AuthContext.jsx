import { useState } from "react"
import { createContext } from "react"

export const AuthContext=createContext()

export function AuthContextProvider({children}){
    const [logindata,setLogindata]=useState([])
    return(
        <AuthContext.Provider value={{logindata,setLogindata}}>{children}</AuthContext.Provider>
    )
}