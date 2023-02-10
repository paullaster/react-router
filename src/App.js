import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Error, SharedLayout, Users, 
  SingleUser, Login, Dashboard, ProtectedRoute} from "./components/Pages";
const App = () => {

  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<SingleUser />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="login" element={<Login setUser={setUser}/>} />
          <Route path="dashboard" element={<Dashboard user={user}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
