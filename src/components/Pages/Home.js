import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      Welcom to React Router Further research Home page
      <Outlet/>
    </div>
  );
};
export default Home;
