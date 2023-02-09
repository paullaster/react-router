import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Error
} from "./components/Pages";
const App = () =>{

  return (
    <BrowserRouter>
      <nav> this is navbar</nav>
      <Routes>
        <Route path='/' element= {< Home />} />
        <Route path='about' element= {<About/>} />
        <Route path='contact' element= {<Contact/>} />
        <Route path="*" element= {<Error />} />
      </Routes>
      <footer> this is footer</footer>
    </BrowserRouter>
  );
}
export default App;