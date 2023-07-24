import "./AboutUs.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CoreValues from '../components/AboutUs/CoreValues'
import AboutUs1 from '../components/AboutUs/AboutUs1';
import AboutUs2 from '../components/AboutUs/AboutUs2';
import AboutUs3 from '../components/AboutUs/AboutUs3';
import AboutUs4 from '../components/AboutUs/AboutUs4';
import AboutUs5 from '../components/AboutUs/AboutUs5';

function AboutUs() {
  return (
    <div className="about-us-pages">
      <Header />
      <AboutUs1 />
      <CoreValues />
      <AboutUs2 />
      <AboutUs3 />
      <AboutUs4 />
      <AboutUs5 />
      <Footer />
    </div>
  );
}

export default AboutUs;