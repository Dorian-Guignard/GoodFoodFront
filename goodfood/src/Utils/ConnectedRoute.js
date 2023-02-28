import { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import Auth from "./providers/Auth";

function ConnectedRoute( {path, component}){
    const navigate = useNavigate();
    const {isConnected}= useContext(Auth);

    return isConnected ? (
        <Route exact path={path} component={component}/>
    ) : ( navigate('/login'))
}

export default ConnectedRoute;