import React from "react"
import NavBar from "./Navbar"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import CardSection from "./CardSection"
import AppSection from "./AppSection"

const App=()=>{
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <CardSection/>
            <AppSection/>
            <Footer/>
        </div>
    )
}
export default App;