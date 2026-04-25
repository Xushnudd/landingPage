import Brand from "./Brand"
import Icon from "./Icon"

const Logo = ({ iconHeight, textHeight }) => (
    <div className="flex gap-3 items-center">
        <Icon iconHeight={iconHeight} />
        <Brand textHeight={textHeight} />
    </div>
)

export default Logo