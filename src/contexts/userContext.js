import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {
    const [login, setlogin] = useState(false)
    
    return(
        <UserContext.Provider value={{login, setlogin}}>
            {children}
        </UserContext.Provider>
    )
}