import { Link } from "react-router-dom";
import './Error.css'

function Error(){
    return (
        <div className="error">
            <div className="error-container">    
                <h1>404 Not Found</h1>
                <h1><Link to="/">Home</Link></h1>
            </div>
        </div>
    )
}

export default Error;   