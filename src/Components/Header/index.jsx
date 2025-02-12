import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
    // const products = useSelector((state) => state.cart.products);
    const cartQuantity = useSelector((state) => state.cart.cartQuantity)

    return (
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl">Header</h1>
        <div className="cart-icon-container">
            <span className="cart-icon">
            <AiOutlineShopping className="text-purple-900 w-full text-3xl" />
            </span>
            <span className="text-xs">Shopping cart</span>
            <span className="overlay">{cartQuantity}</span>
        </div>
        </div>
    )
}

export default Header