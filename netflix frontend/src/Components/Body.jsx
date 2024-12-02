import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter, Routes ,Route} from "react-router-dom";

function Body() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path ="/" element = {<Login />}></Route>
            {/* <Route path="/browse" element = {<Browse />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Login />
      <Browse />
    </div>
  );
}

export default Body;
