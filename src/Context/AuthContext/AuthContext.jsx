import React,{createContext, useEffect, useState} from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isLoggedIn,setIsLoggedIn] = useState(false)


    useEffect(() => {
        const userAuth = localStorage.getItem("userAuth")
        if(userAuth){
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }

    },[])

    // const login = ()=>{
    //     localStorage.setItem("userAuth", JSON.stringify({isLoggedIn:true}))
    //     setIsLoggedIn(true)
    // }

    const logout = ()=>{
        localStorage.removeItem("userAuth")
        setIsLoggedIn(false)
    }



    return (
        <AuthContext.Provider value={{logout,isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}