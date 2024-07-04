import { DarkModeToggleButton } from "./DarkModeToggleButton";
import "../styles/footer.css"


export default function Footer(){

    return(
        <footer>
            <h6>Copyright 2024 CSS Generator / Colin</h6>
            <a href="mailto:14990@coderacademy.edu.au">Email us!</a>

            <DarkModeToggleButton />
        </footer>
    )
}