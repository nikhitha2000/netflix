import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter, Routes ,Route} from "react-router-dom";

import Header from "./Header";
function Body() {
  
  
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path ="/" element = {<Login />}></Route>
            <Route path="/browse" element = {<Browse />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Body;
