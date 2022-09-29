import './App.css';
import { Fragment, useEffect } from 'react';
import Hero from './components/Hero';
import HeroTwo from './components/Hero';
import AppBuild from './components/AppBuild';
import Aos from "aos";
import "aos/dist/aos.css";
import Rpa from './components/Rpa';
import Grid from './components/Grid';
import ContactFormWithSocialButtons from './components/Contact';
import Footer from './components/Footer';
import WithSubnavigation from './components/Header';

function Build5() {

  useEffect(() => {
    Aos.init({duration: 1000, once: true });
}, []);

  return (
    <Fragment>
    <WithSubnavigation />
    <Hero />
    <AppBuild />
    <Rpa />
    <Grid/>
    <ContactFormWithSocialButtons />
    <Footer />
    </Fragment>
  );
}

export default Build5;
