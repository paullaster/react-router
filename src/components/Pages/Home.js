import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Home = () => {
  return (
    <>
      <Navbar/>
      <div>
        some content home
      </div>
      <section>
        <Outlet/>
      </section>
      <Footer />
    </>
    
  );
};
export default Home;
