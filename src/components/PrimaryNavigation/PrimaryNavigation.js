import {Link} from "@reach/router";
import MenuPoint from "../Homepage/MenuPoint/MenuPoint";
import "./PrimaryNavigation.css"


export default function PrimaryNavigation () {
    return (
        <section className="primaryNavigation">
            <img src="https://via.placeholder.com/40.png" alt="Logo"/>
            <nav className="primaryNavigation__nav">
                <input type="checkbox" name="primaryNavigationCheck" id="primaryNavigationCheck"/>
                <label className="primaryNavigation__label" htmlFor="primaryNavigationCheck">
                    <span className="primaryNavigation__burgerBar"></span>
                    <span className="primaryNavigation__burgerBar"></span>
                    <span className="primaryNavigation__burgerBar"></span>
                </label>
                <section className="primaryNavigation__pointWrapper">
                    <div>
                        <MenuPoint
                        heading="Homepage"
                        />
                        <MenuPoint
                        heading="Cases"
                        />
                        <MenuPoint
                        heading="Contact"
                        />
                        <MenuPoint
                        heading="About"
                        />
                    </div>
                </section>
            </nav>
        </section>
    )
};