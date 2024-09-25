import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatuerSection.jsx";
import WorkFlowSection from "./components/WorkFlowSection.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";

const App=()=>{
    return(
        <>
        <Navbar/>
            <div className='max-w-7xl mx-auto pt-20 px-6'>
               <HeroSection/>
                <FeatureSection/>
                <WorkFlowSection/>
                <Pricing/>
                <Testimonials/>
            </div>
        </>
    )
}
export  default App;