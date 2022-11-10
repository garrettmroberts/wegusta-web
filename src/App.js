import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Privacy from './views/Privacy';
import ScrollToTop from "./utils/ScrollToTop";


const App = () => {
  return(
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        
      </Routes>
    </ScrollToTop>
  )
}

export default App;
