import { Link } from "react-router-dom"
import Button from "./Button"

const Banner = () => (
    <div className="w-full h-screen relative">
        <img src="/background.png" alt="background image" className="w-full h-full object-cover" />
        <div className="bg-linear-to-t from-white/0 to-white absolute inset-0 h-2/3"></div>
        <div className="absolute inset-5 top-10">
            <div className="text-center text-green-700 uppercase font-bold">Pos system</div>
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-center">The point of sale for every sale</h1>
                <p className="text-center text-xl">From first sale to full scale, today's best brands run on Shopify's POS system.</p>
                <div className="w-full flex flex-col gap-1.5">
                    <div className="w-full flex gap-2 justify-center">
                        <Button clas={"bg-black text-white"}>Start for free</Button>
                        <Button>Get in touch</Button>
                    </div>
                    <p className="text-center text-sm text-gray-700">Already have a Shopify store?
                        <Link to={"/"} className=" pl-1 underline cursor-pointer">Log in to set up Shopify POS</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Banner