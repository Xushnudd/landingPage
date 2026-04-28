import Card from "./Card"

let data = [
    {
        "img_url": "/card1",
        "title": "Single store",
        "paragraph": "Sell in store with integrated hardware, software, and built-in payments."
    },
    {
        "img_url": "/card2",
        "title": "Multiple stores",
        "paragraph": "Streamline operations with unified data, reporting, and inventory management."
    },
    {
        "img_url": "/card3",
        "title": "On the go",
        "paragraph": "Use wireless POS software to sell at pop-ups, markets, and more."
    }
]

const Support = () => (
    <div className="px-3 flex flex-col gap-10">
        <h2 className="text-4xl">Powering retailers of every size</h2>
        <div className="mx-auto w-full flex gap-5 justify-between flex-wrap">
            {data.map((el, i) => (
                <Card img={el.img_url + ".png"} title={el.title} p={el.paragraph} />
            ))}
        </div>
    </div>
)

export default Support