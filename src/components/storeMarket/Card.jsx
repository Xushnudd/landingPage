import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({ text }) => (
    <div className="w-max p-1 bg-amber-200 rounded-full">
        {text ? <span>{text}</span> : ""}
        <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center text-2xl scale-70">
            <FontAwesomeIcon icon={faPlus} />
        </div>
    </div>
)

export default Card