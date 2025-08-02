import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import NavBar from './components/NavBar.jsx';
import LogoSection from './sections/LogoSection.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';

const App = () => {
    return (
        <>
            <NavBar />  {/* navigation bar */}
            <Hero />    {/* Landing page First look */}
            <ShowcaseSection /> {/* Project showcase */}
            <LogoSection /> {/* Logo strip */}
            <FeatureCards /> {/* Feature skills */}
            <ExperienceSection /> {/* Experience timeling */}
        </>
    )
}

export default App
