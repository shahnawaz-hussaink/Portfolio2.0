import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Social from '../components/Social';
import About from './About';
import Experience from './Experience'
import Works from './Works'
import Contact from './Contact'
import NameRight from '../components/NameRight';
export default function Home(){
    return (
        <>
        <Navbar/>
        <Intro/>
        <About/>
        <Experience/>
        <Works/>
        <Contact/>
        <NameRight/>
        </>
    );
}