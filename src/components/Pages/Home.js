import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
const Home = () => {
  return (
    <>
      <Navbar/>
      <section>
        <Outlet/>
      </section>
    </>
    
  );
};
export default Home;
