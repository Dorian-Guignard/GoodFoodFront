import { createContext, useEffect, useState,  useContext } from "react"
import { getVirtues } from "../api"

export const VirtuesContext = createContext({virtues: []})

export const VirtuesContextProvider = ({children}) => {
    const [virtues, setVirtues] = useState([])

    useEffect(() => {
        const fetchVirtues = async () => {
          const virtues = await getVirtues()
          setVirtues(virtues)
        }
          if(!virtues?.length) fetchVirtues()
        }, [virtues]);
    
    return <VirtuesContext.Provider value={{virtues}}>
        {children}
    </VirtuesContext.Provider>
}

export const useVirtuesContext = () => useContext(VirtuesContext)