import { Link } from "react-router-dom";
const Contact = () => {
    return (
        <div>
            <h4> Holla me</h4>
            <div>
        <Link to="/about">About me</Link>
      </div>
      <div>
        <Link to="/contact">Contact me</Link>
      </div>
        </div>
    );
};
export default Contact;