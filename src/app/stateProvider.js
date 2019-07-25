import React, {useState} from 'react';
import userObj from './states/userState'
import {buns} from  './states/userState'



export const UserContext = React.createContext(userObj); //create Context providers
export const BunContext = React.createContext(buns); //create Context providers

const StateProvider = ({children}) =>{
    const [user, setUser] = useState(userObj); //declare all states as hooks
    const [bun, setBun] = useState(buns);
    return(
        <BunContext.Provider value={[bun, setBun]}>
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
        </BunContext.Provider>
    );
}

export default StateProvider;