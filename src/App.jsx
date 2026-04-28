import Banner from "./components/Banner";
import Brands from "./components/Brands/Brands"
import Header from "./components/Header"
import Look from "./components/Look";
import StoreMarket from "./components/storeMarket/StoreMarket";
import Support from "./components/Support/Support";

const brands = () => {
    let n = [];
    for (let i = 0; i < 4; i++) {
        n.push(<Brands />)
    }
    return n
}

function App() {
    return (
        <div>
            <Header />
            <div className="mx-auto max-w-400">
                <Banner />
                <div className="mx-auto max-w-350 px-3">
                    <section className="mb-30">{brands()}</section>
                    <section><Support /></section>
                    <section><StoreMarket /></section>
                </div>
            </div>
            <div className="my-30">
                <section><Look /></section>
            </div>
        </div>
    )
}

export default App