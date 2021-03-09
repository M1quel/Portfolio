import { Link } from "@reach/router";
import "./SecondaryMenu.css";


export default function SecondaryMenu() {
    return (
        <section className="secondaryNavigationWrapper">
            <nav className="secondaryNavigation">
                <Link to="/">
                    <img src="./chevronUP.svg" alt=""/>
                </Link>
                <section className="secondaryNavigationDotWrapper">
                    <span className="secondaryNavigationDot firstDot"></span>
                    <span className="secondaryNavigationDot"></span>
                    <span className="secondaryNavigationDot"></span>
                    <span className="secondaryNavigationDot"></span>
                    <span className="secondaryNavigationDot"></span>
                    <span className="secondaryNavigationDot"></span>
                </section>
                <Link to="/">
                    <img src="./chevronDOWN.svg" alt=""/>
                </Link>
            </nav>
        </section>
    )
}