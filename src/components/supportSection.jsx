import { useState } from 'react';

const SupportSection = () => {
    const features = [
        {
            id: 1,
            title: "Sell everywhere",
            desc: "Close sales at the counter and keep offline and online orders in sync with Shopify POS.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800", // Video dagi 1-rasm o'rniga
        },
        {
            id: 2,
            title: "Build loyalty",
            desc: "Know your customers in store and online and create personalized shopping experiences that convert.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", // Video dagi 2-rasm o'rniga
        },
        {
            id: 3,
            title: "Simplify tasks",
            desc: "Streamline daily operations with one back office to manage inventory, orders, customers, and staff.",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800", // Video dagi 3-rasm o'rniga
        },
    ];

    const [activeTab, setActiveTab] = useState(features[0]);

    return (
        <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">POS SOFTWARE</p>
                    <h2 className="text-5xl md:text-6xl font-medium leading-tight">
                        Connected retail. <br />
                        The way it should be.
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                        <img
                            src={activeTab.image}
                            alt={activeTab.title}
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                            key={activeTab.id}
                        />
                    </div>
                    <div className="space-y-8">
                        {features.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setActiveTab(item)}
                                className="relative pl-8 cursor-pointer group"
                            >
                                <div
                                    className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${activeTab.id === item.id ? "bg-green-500 scale-y-100" : "bg-gray-800 scale-y-0 group-hover:scale-y-50"
                                        }`}
                                />

                                <h3 className={`text-2xl font-semibold mb-3 transition-colors ${activeTab.id === item.id ? "text-white" : "text-gray-500"
                                    }`}>
                                    {item.title}
                                </h3>

                                <p className={`text-lg leading-relaxed transition-colors ${activeTab.id === item.id ? "text-gray-300" : "text-gray-600"
                                    }`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;