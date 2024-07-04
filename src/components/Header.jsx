import { NavLink } from "react-router-dom";
import "../styles/header.css"


export default function Header(){

    return(
        <header>
            <div id="headerBranding">
                CSS Generator
            </div>
            <nav id="headerNavbar">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/generator"}>Generator</NavLink>
            </nav>
        </header>
    )
}