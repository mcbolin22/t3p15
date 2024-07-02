import { NavLink } from "react-router-dom";


export default function Header(){

    return(<>
        <div id="headerBranding">
            CSS Generator
        </div>
        <nav id="headerNavbar">
            <NavLink to={"/"}>Home</NavLink>
            {/* <NavLink to={"/generator"}>Generator</NavLink>
            <Navlink to={"/generator/saved"}>Saved Themes</Navlink> */}
        </nav>
    </>)
}