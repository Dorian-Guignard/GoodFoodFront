import { createContext } from "react";


export default createContext({
    isConnected : false,
    setIsConnected: value => {}
})