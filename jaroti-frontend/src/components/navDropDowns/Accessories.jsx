import DropDownImg from '../../assets/dropdownIcon.png';
import NavAccessoriesImg from '../../assets/nav-accessories-img.jpg';
const Accessories = () => {
  const linkscol1 = ['Jewlery', 'Handbags', 'Watches', 'Accessories'];
  const linkscol2 = [
    'Earrings',
    'Piercing',
    'Bracelets',
    'Rings',
    'Necklaces',
    'Pendents',
    'Link Chains',
    'Diamonds',
  ];

  return (
    <>
      <div className="group/a ">
        <div className="hover:text-red-700 transition duration-300 ease flex items-center justify-center cursor-pointer">
          <span>Accessories</span>
          <img src={DropDownImg} className="w-3 object-contain" alt="" />
        </div>

        <div className="overflow-y-scroll overflow-x-hidden max-h-96 hidden group-hover/a:flex  absolute left-0 w-screen bg-white border border-slate-200 ">
          {/* Column 1 */}
          <div className="flex-1 grid grid-cols-3">
            <div className="flex flex-col justify-start items-start py-14 px-6 gap-3 text-sm  ">
              <span className="font-extrabold text-base  ">
                Shop By Product
              </span>
              {linkscol1.map((link, index) => (
                <span
                  className="hover:text-red-700 cursor-pointer transition duration-300 ease"
                  key={index}
                >
                  {link}
                </span>
              ))}

              <span className="font-extrabold text-base mt-5">Handbags</span>
              {linkscol2.map((link, index) => (
                <span
                  className="hover:text-red-700 cursor-pointer transition duration-300 ease"
                  key={index}
                >
                  {link}
                </span>
              ))}
            </div>
            {/* Column 2 */}
            <div className="flex flex-col justify-start items-start py-14 px-6 gap-3 text-sm  ">
              <span className="font-extrabold text-base">
                Shop by Collection
              </span>
              {linkscol2.map((link, index) => (
                <span
                  className="hover:text-red-700 cursor-pointer transition duration-300 ease"
                  key={index}
                >
                  {link}
                </span>
              ))}
              <span className="font-extrabold text-base   mt-5">
                Accessories
              </span>
              {linkscol1.map((link, index) => (
                <span
                  className="hover:text-red-700 cursor-pointer transition duration-300 ease"
                  key={index}
                >
                  {link}
                </span>
              ))}
            </div>
            {/* Column 3 */}
            <div className="flex flex-col justify-start items-start py-14 px-6 gap-3 text-sm  ">
              <span className="font-extrabold text-base  ">Curated Shops</span>
              {linkscol1.map((link, index) => (
                <span
                  className="hover:text-red-700 cursor-pointer transition duration-300 ease"
                  key={index}
                >
                  {link}
                </span>
              ))}

              <span className="font-extrabold text-base mt-5">Love</span>
              {linkscol2.map((link, index) => (
                <span
                  className="hover:text-red-700 cursor-pointer transition duration-300 ease"
                  key={index}
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
          {/* Img */}
          <div className="w-max px-3 py-20 overflow-hidden ">
            <div className="overflow-hidden rounded-lg cursor-pointer group relative flex justify-center items-center text-white px-2">
              <img
                src={NavAccessoriesImg}
                className="transition duration-500 ease group-hover:scale-125 object-cover w-96 rounded-lg"
                alt=""
              />
              <div className="absolute py-5 px-1 flex flex-col justify-center items-center ">
                <h1 className="w-full leading-snug text-center font-extrabold text-[2rem] mb-10">
                  Gold Earrings For Women
                </h1>
                <p className="text-base">
                  25% Discount Last 3 Days - Limited Offer
                </p>
                <button className="px-5 py-2 rounded-3xl uppercase bg-white text-black font-semibold tracking-tighter bold mt-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
