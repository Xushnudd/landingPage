import Char from "./Char"

let charList = [
    {
        "id": 1,
        "brand_name": "Allbirds",
        "logo_url": "https://cdn.shopify.com/s/files/1/0693/0215/7334/files/allbirds.logo.svg"
    },
    {
        "id": 2,
        "brand_name": "KOTN",
        "logo_url": "https://cdn.shopify.com/s/files/1/0693/0215/7334/files/kotn.logo.svg"
    },
    {
        "id": 3,
        "brand_name": "Parachute",
        "logo_url": "https://cdn.shopify.com/s/files/1/0693/0215/7334/files/parachute.logo.svg"
    },
    {
        "id": 4,
        "brand_name": "Alo",
        "logo_url": "https://cdn.shopify.com/s/files/1/0693/0215/7334/files/alo.logo.svg"
    },
    {
        "id": 5,
        "brand_name": "Glossier",
        "logo_url": "https://cdn.shopify.com/s/files/1/0693/0215/7334/files/glossier.logo.png"
    },
    {
        "id": 6,
        "brand_name": "Gorjana",
        "logo_url": "https://cdn.shopify.com/s/files/1/0693/0215/7334/files/gorjana.logo.svg"
    }
]

const Brands = () => (
    <div className="w-full border-b-2 border-gray-500 py-15 flex flex-wrap gap-5 justify-center items-center">
        {charList.map((el, i) => (
            <Char key={i} img={el.logo_url} name={el.brand_name} />
        ))}
    </div>
)

export default Brands