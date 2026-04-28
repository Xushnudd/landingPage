import Button from "./Button";

const GetStarted = () => {
    const steps = [
        {
            id: 1,
            title: "Start for free",
            description: "Try Shopify POS for free—no credit card required."
        },
        {
            id: 2,
            title: "Set up your store",
            description: "Get help every step of the way, from dedicated customer service to POS migration apps."
        },
        {
            id: 3,
            title: "Customize your solution",
            description: (
                <>
                    Personalize your POS with <a href="#" className="underline decoration-1 underline-offset-4">apps</a> and create custom solutions with <a href="#" className="underline decoration-1 underline-offset-4">Shopify Partners</a>.
                </>
            )
        }
    ];

    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-[56px] leading-[1.1] font-medium text-gray-900 mb-6 tracking-tight">
                        How to get started with Shopify POS
                    </h2>
                    <p className="text-xl text-gray-600">
                        Whether you’re starting out or switching platforms, we're here to help.
                    </p>
                </div>
                <div className="flex flex-wrap gap-10">
                    {steps.map((step) => (
                        <div key={step.id} className="max-w-10/32 min-w-50">
                            <div className="w-12 h-12 bg-[#EEF4BD] rounded-lg flex items-center justify-center mb-6">
                                <span className="text-xl font-medium text-[#4A5B2A]">{step.id}</span>
                            </div>

                            <h3 className="text-2xl font-medium text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 justify-center mt-12">
                    <Button clas={"bg-black text-white text-xl hover:bg-neutral-700"}>Start for free</Button>
                    <Button clas={"text-xl hover:border-neutral-700"}>Get in touch</Button>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;