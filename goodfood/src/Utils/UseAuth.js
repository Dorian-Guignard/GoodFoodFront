import { useContext } from "react"
import { UserContext } from "./providers/UserContext"

function UseAuth() {
    return useContext(UserContext);
}

export default UseAuth;