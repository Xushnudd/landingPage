import Button from "./Button"

let data = [
    {
        "head": "Omnichannel selling",
        "p": "Use a connected back office to sell in person, online, on social media, and marketplaces.",
        "link": "Omnichannel selling"
    },
    {
        "head": "Staff management",
        "p": "Set staff permissions to control what employees can access.",
        "link": "Staff management"
    },
    {
        "head": "Payment processing",
        "p": "Accept popular payment methods at competitive transaction rates.",
        "link": "Payment processing"
    },
    {
        "head": "Inventory management",
        "p": "Manage inventory across locations and seamlessly integrate your existing IMS and OMS.",
    },
    {
        "head": "Customer management",
        "p": "Capture customer info seamlessly at checkout and use insights to improve buying experiences.",
    },
    {
        "head": "Reporting and analytics",
        "p": "Understand your business, from what sells best to when you’re busiest.",
    }
]

const PosFeatures = () => (
    <div className="w-full px-5 py-10 bg-lime-50">
        <div className="w-full flex flex-col items-center">
            <div>
                <h3 className="text-xl">POS FEATURES</h3>
                <h2 className="text-4xl">All the features. All in one place.</h2>
                <p className="text-gray-600 text-lg font-bold">Increase productivity from showroom to back room with everything your team needs to run your business right.</p>
            </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
            <div>
                <div className="my-10 flex gap-5 justify-center flex-wrap">
                    {data.map((el, i) => (
                        <div key={i} className="w-1/4 border-t-2 border-gray-400 py-3">
                            <h2 className="text-2xl my-1">{el.head}</h2>
                            <p className="text-gray-500">{el.p}</p>
                            <a href="/" className="underline text-lg inline-block my-2 font-bold">{el.link ?? null}</a>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-center">
                    <Button>Explore all features</Button>
                </div>
            </div>
        </div>
    </div>
)

export default PosFeatures