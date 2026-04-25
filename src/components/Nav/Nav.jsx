
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../Logo/Logo"
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <div className="py-4.5 px-5 border-b border-gray-300 flex justify-between items-center sm:px-8 lg:px-12">
                <Link to={"/"} className="cursor-pointer">
                    <Logo iconHeight={"36px"} textHeight={"27px"} />
                </Link>
                <div className="text-lg flex gap-10 items-center">
                    <span className="w-max cursor-pointer hover:underline">Start for free</span>
                    <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
                </div>
            </div>
            <div className="py-4.5 px-5 border-b border-gray-300 flex justify-between items-center cursor-pointer sm:px-8 lg:px-12">
                <span className="text-md text-gray-700 uppercase">Point of sale</span>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </nav>
    )
}

export default Nav