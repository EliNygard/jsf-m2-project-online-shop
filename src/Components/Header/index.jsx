import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
    return (
        <div className="flex justify-between">
            <h1 className="text-2xl">Header</h1>
        <div className="cart-icon-container">
            <span>
            <AiOutlineShopping />
            </span>
        </div>
        </div>
    )
}

export default Header