import { Link } from "@reach/router";
import "./MenuPoint.css";

export default function MenuPoint (props) {
    return (
        <Link className="primaryMenuPoint" to="/">
            <span className="primaryMenuPointLiner"></span>
            <p className="primaryMenuPointHeading">{props.heading}</p>
        </Link>
    )
}