import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatuerSection.jsx";
import WorkFlowSection from "./components/WorkFlowSection.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import {Button, createTheme, ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {useCallback, useState} from "react";

const App=()=>{
     const [mode,setMode]=useState(true);

    const handleModeChange=useCallback(()=>{
        setMode(!mode);
    },[mode]);
    const appTheme = createTheme({
        palette: {
            mode: mode? 'dark':'light',
        },
    });

    return(
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
             <Navbar changeMode={handleModeChange} mode={mode}/>
             <div className='max-w-7xl mx-auto pt-20 px-6'>
               <HeroSection/>
                <FeatureSection/>
                <WorkFlowSection/>
                <Pricing/>
                <Testimonials/>
            </div>
                <Footer/>
        </ThemeProvider>
    )
}
export  default App;