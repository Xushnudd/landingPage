const Char = ({ img, name }) => (
    <li className="items-center list-none">
        <div className="w-40 mx-auto">
            <picture data-component-name="image">
                <img src={img}
                    alt={name}
                    className="w-full h-full max-h-16 grayscale brightness-0"
                />
            </picture>
        </div>
    </li>
)

export default Char