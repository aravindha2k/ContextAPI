import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const[loggedIn, setLog] = useState(true);
  return (
    <AuthContext.Provider value={{
        loggedIn,
        setLog
    }} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext