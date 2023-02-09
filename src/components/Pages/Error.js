import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h3>404</h3>
            <p>
                Pae not found.
            </p>
            <div>
                <Link to="/">Back home</Link>
            </div>
        </div>
    );
};
export default Error;