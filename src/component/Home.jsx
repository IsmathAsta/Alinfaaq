import React from "react";
import BannerSlider from "./BannerSlider";
import About from "./About";
import Services from "./Services";
import Courses from "./Courses";
import Donate from "./Donate";

export default function Home(){
    return(
        <>
        <BannerSlider/>
        <About/>
        <Services/>
        <Courses/>
        <Donate/>
        
        </>
    )
}