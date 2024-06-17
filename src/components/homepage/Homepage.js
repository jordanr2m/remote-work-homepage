import "./Homepage.css"
/* Import images */
import databiz from "../../assets/client-databiz.svg";
import audiophile from "../../assets/client-audiophile.svg";
import meet from "../../assets/client-meet.svg";
import maker from "../../assets/client-maker.svg";

const Homepage = () => {
    return (
        <section className="homepage">
            <div className="hero-img"></div>

            <main className="content wrapper">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className="learn-more">Learn more</button>

                <div className="endorsement-icons">
                    <img src={databiz} alt="databiz"/>
                    <img src={audiophile} alt="audiophile"/>
                    <img src={meet} alt="meet"/>
                    <img src={maker} alt="maker"/>
                </div>
            </main>
        </section>
    )
}

export default Homepage
