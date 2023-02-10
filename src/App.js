import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Error, SharedLayout, Users, SingleUser } from "./components/Pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="Users/:userId" element={<SingleUser />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
