import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Error, SharedLayout, Users, 
  SingleUser, Login, Dashboard, ProtectedRoute, UserPage} from "./components/Pages";
const App = () => {

  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route index element={<UserPage />} />
            <Route path=":userId" element={<SingleUser />} />
          </Route>
          
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="login" element={<Login setUser={setUser}/>} />
          <Route path="dashboard" element={
            <ProtectedRoute user={user}>
              <Dashboard user={user}/>
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
