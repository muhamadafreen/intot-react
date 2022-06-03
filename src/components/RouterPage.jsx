import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "./App";
import Signup from "./SignUp";

 function RouterPage(){
    return (
        <div>
            <Router>
                <Routes>
                <Route exact path="/" element={<App/>}></Route>
                <Route path="/SignUp" element={<Signup/>} />

                </Routes>
            </Router>
        </div>
    )
}

export default RouterPage;