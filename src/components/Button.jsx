const Button = ({children, clas}) => (
    <button className={clas+" border-2 rounded-full py-2 px-5 font-bold"}>{children}</button>
)

export default Button