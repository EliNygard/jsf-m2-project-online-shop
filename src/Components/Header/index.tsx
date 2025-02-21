import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import { HeaderNav } from "../HeaderNav";
import { RootState } from "../../app/store";

const Header: React.FC = () => {
  // const products = useSelector((state) => state.cart.products);
  const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity);

  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl text-purple-900">The Online Shop</h1>
      <HeaderNav />
      <div className="cart-icon-container">
        <span className="cart-icon">
          <AiOutlineShopping className="text-purple-900 w-full text-4xl" />
        </span>
        <span className="text-xs text-purple-900">Shopping cart</span>
        <span className="overlay">{cartQuantity}</span>
      </div>
    </header>
  );
};

export default Header;
