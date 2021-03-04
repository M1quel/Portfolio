import {Link} from "@reach/router";
import "./PrimaryNavigation.css"


export default function PrimaryNavigation () {
    return (
        <section className="primaryNavigation">
            <img src="https://via.placeholder.com/40.png" alt="Logo"/>
            <nav className="primaryNavigation__nav">
                <label className="primaryNavigation__label" htmlFor="primaryNavigationCheck">
                    <span className="primaryNavigation__burgerBar"></span>
                    <span className="primaryNavigation__burgerBar"></span>
                    <span className="primaryNavigation__burgerBar"></span>
                </label>
                <input type="checkbox" name="primaryNavigationCheck" id="primaryNavigationCheck"/>
                <section className="primaryNavigation__pointWrapper">
                    <div>
                        <Link to="/">
                            hej
                        </Link>
                        <Link to="/">
                            hej
                        </Link>
                        <Link to="/">
                            hej
                        </Link>
                        <Link to="/">
                            hej
                        </Link>
                    </div>
                </section>
            </nav>
        </section>
    )
};