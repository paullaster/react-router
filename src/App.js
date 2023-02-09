import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact
} from "./components/Pages";
const App = () =>{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {< Home />} />
        <Route path='about' element= {<About/>} />
        <Route path='contact' element= {<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;