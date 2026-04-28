const Card = ({ img, alt, title, p }) => (
    <div className="max-w-100 min-w-60 py-1">
        <img src={img} alt={alt} />
        <div className="mt-5 border-t-2 border-gray-300 pt-5">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="my-2 text-gray-600">{p}</p>
        </div>
    </div>
)

export default Card