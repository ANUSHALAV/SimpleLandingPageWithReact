
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarSection/NavbarSection.jsx';
import NavbarSection from './NavbarSection/NavbarSection.jsx';
import HomeSection from './HomeSection/HomeSection.jsx';
import AboutSection from './AboutSection/AboutSection.jsx';
import ServiceSection from './ServiceSection/ServiceSection.jsx';
import ContactSection from './ContactSection/ContactSection.jsx';
import FooterSection from './FooterSection/FooterSection.jsx';

function App() {

  return (
    <>
    <NavbarSection/>
    <HomeSection/>
    <AboutSection/>
    <ServiceSection/>
    <ContactSection/>
    <FooterSection/>
    </>
  )
}

export default App
