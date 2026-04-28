import Button from "./Button"

const Retail = () => (
    <div className="w-full p-5 flex flex-col gap-10 md:flex-row">
        <img src="/retail.png" alt="retail" />
        <div>
            <h3 className="text-xl font-bold">Retail Payments</h3>
            <h2 className="text-4xl">Tap into 100M+ new customers</h2>
            <p className="text-gray-600 my-5">Turn on Shopify Payments and gain access to 100M+ engaged shoppers in the Shop network. Grow your customer list while powering every sale with a world-class payment processor.</p>
            <Button>Meet SHopify Payments</Button>
        </div>
    </div>
)

export default Retail