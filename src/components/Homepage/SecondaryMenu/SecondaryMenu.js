import { Link } from "@reach/router";
import "./SecondaryMenu.css";
import { useEffect, useState } from "react";


export default function SecondaryMenu() {
    function scrollDown() {
        window.scrollBy(0, window.innerHeight)
    }
    function scrollUp() {
        window.scrollBy(0, -window.innerHeight)
    }
    return (
        <section className="secondaryNavigationWrapper">
            <nav className="secondaryNavigation">
                <span onClick={scrollUp} className="prevCaseButton">
                    <img src="./chevronUP.svg" alt=""/>
                </span>
                <section className="secondaryNavigationDotWrapper">
                    <span className="secondaryNavigationDot firstDot"></span>
                    <span className="secondaryNavigationDot"></span>
                    <span className="secondaryNavigationDot"></span>
                    <span className="secondaryNavigationDot"></span>
                    <span className="secondaryNavigationDot"></span>
                    <span className="secondaryNavigationDot"></span>
                </section>
                <span onClick={scrollDown} className="nextCaseButton">
                    <img src="./chevronDOWN.svg" alt=""/>
                </span>
            </nav>
        </section>
    )
}