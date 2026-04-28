const SwitchBanner = () => {
    return (
        <div className="w-full bg-lime-100 rounded-t-4xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
                <img
                    src="/switchBanner.png"
                    alt="Office workspace"
                    className="w-8/10 h-auto rounded-xl object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-5xl md:text-6xl font-medium text-gray-900 leading-tight">
                    Switch and save $2,300*
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                    Get free POS hardware, free migration and setup support, and 25% off
                    subscription costs with a POS Pro yearly subscription.
                </p>
                <div className="pt-4">
                    <button className="bg-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-colors">
                        Learn more
                    </button>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed max-w-md pt-4">
                    *$10,000 USD of sales in Shopify Payments transactions within 90 days of
                    subscribing to POS Pro Yearly at a single location to qualify for rebate.
                    Current subscribers of POS Pro are excluded from this offer. See full terms
                    and conditions.
                </p>
            </div>
        </div>
    );
};

export default SwitchBanner;