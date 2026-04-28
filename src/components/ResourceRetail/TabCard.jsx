import { useState } from "react"

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TabCard = ({ title, caption }) => {
    const [state, setstate] = useState(false)

    function changestate() {
        setstate(!state)
    }

    return (
        <div className="border-b border-neutral-500 p-10 text-white flex flex-col">
            <div className="w-full flex justify-between items-center">
                <div className="text-3xl">{title}</div>
                <div onClick={changestate} className={`w-10 h-10 flex items-center justify-center rounded-full scale-110 cursor-pointer duration-1000 ${!state ? "bg-white text-black" : "bg-black text-white border-2 border-white" }`}>
                    {!state ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} /> }
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in ${state ? "h-max opacity-100 mt-10" : "h-0 opacity-0 mt-0"}`}>{caption}</div>
        </div>
    )
}

export default TabCard