const Card = ({ img, img_alt, head, p, link, link_name }) => (
    <div className="w-105 border border-gray-600 rounded-2xl p-10 flex flex-col gap-8">
        <img src={img} alt={img_alt} />
        <div className="text-white flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <h3 className="text-2xl">{head}</h3>
                <p className="text-gray-300">{p}</p>
            </div>
            {link ? <a href={link} className="underline text-lg hover:no-underline hover:text-gray-300">{link_name}</a> : null}
        </div>
    </div>
)

export default Card