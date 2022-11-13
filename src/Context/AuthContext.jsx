import { useState } from "react"
import { createContext } from "react"

export const AuthContext=createContext()

export function AuthContextProvider({children}){
    const [logindata,setLogindata]=useState([])
    const [search,setSearch]=useState("")
    const [total,setTotal]=useState(0)
    return(
        <AuthContext.Provider value={{logindata,setLogindata,search,setSearch,total,setTotal}}>{children}</AuthContext.Provider>
    )
}