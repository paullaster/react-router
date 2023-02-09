import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About
} from "./components/Pages";
const App = () =>{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {< Home />} />
        <Route path='about' element= {<About/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;