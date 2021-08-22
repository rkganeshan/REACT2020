import Recat,{useContext} from "react"
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Color"

const HeroSection=()=>{
    const theme=useContext(ThemeContext)[0]
    const currentTheme=AppTheme[theme]

    return(
        <div></div>
    )
}

export default HeroSection;