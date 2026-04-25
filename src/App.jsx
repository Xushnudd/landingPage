import Brands from "./components/Brands/Brands"
import Header from "./components/Header"

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
            <main>
                <div>{brands()}</div>
            </main>
        </div>
    )
}

export default App