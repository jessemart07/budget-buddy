import React, { Component } from 'react';
import NavBar from '../../components/Navigation/Navbar/Navbar';
import Hero from '../../components/HeroBackground/HeroBackground';
import About from '../../components/About/About';
import GetStarted from '../../components/GetStarted/GetStarted';
import Curve from '../../components/Curve/Curve';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
class HomePage extends Component{
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Hero></Hero>
                <About></About>
                <GetStarted></GetStarted>
                <Curve></Curve>
                <Contact></Contact>
                <Footer></Footer>
            </React.Fragment>
            
        )
    }
}

export default HomePage;
