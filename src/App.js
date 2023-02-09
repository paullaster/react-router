import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./components/Pages/index";
const App = () =>{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {< Home />} />
        <Route path='about' element= {<div>
          <h1>PAullaster Okoth</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;