import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            Welcom to React Router Further research  Home page
            <Link to="/about" >About me</Link>
        </div>
    );
};
export default Home;