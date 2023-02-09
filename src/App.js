import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () =>{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<div>Home page</div>} />
        <Route path='about' element= {<div>
          <h1>PAullaster Okoth</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;