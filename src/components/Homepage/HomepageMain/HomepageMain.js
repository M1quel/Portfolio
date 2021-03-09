import "./HomepageMain.css";

export default function HomepageMain (props) {
    return (
        <section className="homepageMainWrapper">
            <section className="homepageCaseWrapper">
                <img className="homepageCaseImg" src={props.img} alt=""/>
                <h1 className="homepageCaseHeading">{props.heading}</h1>
            </section>
        </section>
    )
}