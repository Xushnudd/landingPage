import Banner from "./components/Banner";
import Brands from "./components/Brands/Brands"
import Footer from "./components/Footer/Footer";
import FooterCTA from "./components/FooterCTA";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header"
import Look from "./components/Look";
import PosFeatures from "./components/PosFeatures";
import PosRetail from "./components/PosReatail";
import ResourceRetail from "./components/ResourceRetail/ResourceRetail";
import Retail from "./components/Retail";
import StoreMarket from "./components/storeMarket/StoreMarket";
import Support from "./components/Support/Support";
import SupportSection from "./components/supportSection";
import SwitchBanner from "./components/SwitchBanner";

const brands = () => {
    let n = [];
    for (let i = 0; i < 4; i++) {
        n.push(<Brands />)
    }
    return n
}

const section = [
    <Look />,
    <SupportSection />,
    <PosRetail />,
    <Retail />,
    <PosFeatures />,
    <GetStarted />,
    <SwitchBanner />,
    <ResourceRetail />,
    <FooterCTA />
]

function App() {
    return (
        <div>
            <Header />
            <main>
                <div className="mx-auto max-w-400">
                    <Banner />
                    <div className="mx-auto max-w-350 px-3">
                        <section className="mb-30">{brands()}</section>
                        <section><Support /></section>
                        <section><StoreMarket /></section>
                    </div>
                </div>
                <div className="mt-30">
                    {section.map((el, i) => (
                        <section key={i}>{el}</section>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default App