/* eslint-disable react/prop-types */
import Heart from '../assets/heart.png';
const Product = ({ product, width = null }) => {
  return (
    <div className="relative flex flex-col gap-5  cursor-pointer items-center justify-center group/product">
      <div className="relative flex justify-center items-center">
        <img
          src={product?.img}
          className={`${width ? width : 'min-w-72'} object-cover`}
          alt=""
        />
        <div className="absolute flex flex-col top-4 left-4 gap-2">
          <span className="bg-white rounded-2xl text-center font-bold uppercase text-red-700 text-xs px-3 py-1">
            hot
          </span>
          <span className="bg-white rounded-2xl text-center font-bold uppercase text-red-700 text-xs px-3 py-1">
            24%
          </span>
        </div>
        <div className="group/wishlist absolute flex group-hover/product:opacity-100 opacity-0 right-4 top-2 gap-3 group-hover/product:translate-y-[10px] transition duration-500 ease">
          <span className="group-hover/wishlist:opacity-100 flex  opacity-0 uppercase bg-black text-white text-sm  py-1  items-center  px-5 rounded-3xl transition duration-300 ease">
            wishlist
          </span>
          <span className=" group-hover/wishlist:bg-red-300 bg-white w-10 h-10 rounded-full flex text-center justify-center">
            <img src={Heart} className="w-6 object-contain" alt="" />
          </span>
        </div>
        <button className="absolute  opacity-0 bottom-1  w-[90%] bg-white py-1 uppercase text-black font-bold hover:bg-red-700 hover:text-white transition duration-300 ease group-hover/product:opacity-100 group-hover/product:translate-y-[-10px] rounded-3xl">
          Add to cart
        </button>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <span className="text-base">{product.name}</span>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
