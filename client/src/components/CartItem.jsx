import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import {Qty} from ".";
import { useCartContext } from "../context/CartContext";



const CartItem = ({item}) => {

  const {removeFromCart} = useCartContext()

  return (
    <div className="flex gap-x-8">
      <Link
      to={`products/${item.id}`}
      className="w-[70px] h-[70px]">
      <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="" />
      </Link>

      <div className="flex-1">
        {/* title & remove icon */}
        <div className="flex gap-x-4 mb-3">
        <Link 
        to={`products/${item.id}`}
        className="">
          {item.attributes.title}
        </Link>
        <div 
        onClick={() => removeFromCart(item.id)}
        className="cursor-pointer text-[24px] hover:text-accent translate-full ">
          <IoClose />
        </div>
      </div>
      <div className="flex items-center gap-x-12">
      {/* quantity */}
      <div className="flex gap-x-4 items-center mb-2">
      <Qty item={item} />
      </div>
      <p className="text-accent text-xl">
        $ {item.attributes.price * item.amount}</p>
      </div>

      <p className="text-accent">
        $ {item.attributes.price} per peice
      </p>
      </div>
    </div>
  )
};

export default CartItem;
