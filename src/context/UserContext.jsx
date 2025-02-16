import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isJoinedGrp, setIsJoinedGrp] = useState(false)
    

    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, isJoinedGrp, setIsJoinedGrp }}>
            {children}
        </UserContext.Provider>
    );
};