
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Watchlist from './Components/Watchlist';

function App() {
  return (
    <>
    {/* <Header/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/watchlist" element={<Watchlist/>}></Route>
      </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
