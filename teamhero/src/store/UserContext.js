import React, { useState } from 'react';

const UserContext = React.createContext({
    authenticated: false,
    setAuthenticated: () => {},
})

export const UserContextProvider = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    return <UserContext.Provider
        value={{
            authenticated,
            setAuthenticated
        }}
    >
    {props.children}
    </UserContext.Provider>
}

export default UserContext;