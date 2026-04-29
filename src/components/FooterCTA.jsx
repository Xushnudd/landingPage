import Button from "./Button";

const FooterCTA = () => {
  return (
    <div className="bg-[#211915] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-medium mb-10 tracking-tight">
          Sell better with Shopify POS
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button clas={"bg-white text-black text-xl px-8 py-4 hover:bg-white/90"}>
            Start for free
          </Button>
          <Button clas={"text-xl px-8 py-4 hover:border-3 hover:border-gray-300"}>
            Get in touch
          </Button>
        </div>
        <p className="text-sm text-gray-300">
          Already have a Shopify store?{" "}
          <a href="#" className="underline underline-offset-4 hover:text-white transition-colors">
            Log in to set up Shopify POS
          </a>
        </p>
        
      </div>
    </div>
  );
};

export default FooterCTA;