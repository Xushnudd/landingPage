import Button from "./Button"

let data = [
    {
        "head": "Get started quickly",
        "p": "Start selling in no time with reliable hardware that’s ready to go out of the box."
    },
    {
        "head": "Sell without interruptions",
        "p": "Keep the checkout line moving with 99.9% uptime across the Shopify platform."
    },
    {
        "head": "Customize your setup",
        "p": "Choose hardware for your budget and selling scenario—at the counter or on the go."
    }
]
const PosRetail = () => (
    <div className="px-3 py-10">
        <div>
            <h3 className="text-2xl">Pos reatil hardwate</h3>
            <h2 className="text-4xl">Integrated hardware,<br /> however you sell</h2>
        </div>
        <img src="/posRetail.png" alt="retail" className="my-10" />
        <div>
            <div className="flex flex-col gap-5 lg:flex-row">
                {data.map((el, i) => (
                    <div key={i} className="border-t-2 border-gray-400 py-3">
                        <h3 className="text-2xl">{el.head}</h3>
                        <p className="text-gray-600 text-lg">{el.p}</p>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center my-10">
                <Button clas={"text-lg"}>Discover POS hardware</Button>
            </div>
        </div>
    </div>
)

export default PosRetail