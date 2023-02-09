import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1> About Paullaster Okoth</h1>
      <div>
        <Link to="/">Back home</Link>
      </div>
      <div>
        <Link to="/contact">Contact me</Link>
      </div>
    </div>
  );
};
export default About;
