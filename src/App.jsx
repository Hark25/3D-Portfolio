import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import NavBar from './components/NavBar.jsx';
import LogoSection from './sections/LogoSection.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import TechStack from './sections/Techstack.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
    return (
        <>
            <NavBar />  {/* navigation bar */}
            <Hero /> {/* Landing page First look */}
            <ShowcaseSection /> {/* Project showcase */}
            <LogoSection /> {/* Logo strip */}
            <FeatureCards /> {/* Feature skills */}
            <ExperienceSection /> {/* Experience timeline */}
            <TechStack /> {/* TechStack showcase */}
            {/* <Testimonials />  Testimonials/customer feedback */}
            <Contact /> {/* Contact Me */}
            <Footer /> {/* Footer */}
        </>
    )
}

export default App
