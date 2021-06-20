import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Doctors from "./Doctors";
import PhotoGallery from "./PhotoGallery";





const App =()=> {
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/doctor" component={Doctors} />
        <Route exact path="/photo-gallery" component={PhotoGallery} />

        <Redirect to="/" />
        </Switch>
        <Footer/>
        </BrowserRouter>
        

        </>
    )
};

export default App;