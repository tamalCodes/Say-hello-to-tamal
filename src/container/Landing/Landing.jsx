import React from 'react';
import Header from '../Header/Header';
import { Navbar } from '../../components';
import About from '../About/About';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import Communities from '../Communities/Communities';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';


const Landing = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Communities />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Landing