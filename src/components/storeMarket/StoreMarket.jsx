import Card from "./Card"

const StoreMarket = () => (
    <div className="w-full mb-10 flex flex-col gap-5">
        <h2 className="text-5xl">Everything you need<br />in store, online, and beyond</h2>
        <p className="text-gray-600">It’s the power to sell in person backed by the power to sell online, all by the world’s best commerce platform.</p>
        <div className="relative top-10">
            {<img src="/storeMarket-sm.png" alt="store market picture" />}
            <div className="absolute left-25 bottom-40">
                <Card />
            </div>
            <div className="absolute left-65 top-35">
                <Card />
            </div>
            <div className="absolute left-10 top-5">
                <Card />
            </div>
        </div>
    </div>
)

export default StoreMarket