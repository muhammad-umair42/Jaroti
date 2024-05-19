import DownIcon from '../../assets/dropdownIcon.png';
import Jewlerycol1Img from '../../assets/navJewleryImg.jpg';
const Jewlery = () => {
  // Dummy Data For Jewlery Hover Links
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
  const linkscol3 = [
    'Hair Accessories',
    'Other Accessories',
    'Perfumes',
    'Scarves',
    'SunGlases',
    'Toiletry Bags',
    'Wallets & Purses ',
  ];
  return (
    <div className="group/j ">
      {/* Title */}
      <div className="hover:text-red-700 transition duration-300 ease flex items-center justify-center cursor-pointer">
        <span>Jewlery</span>
        <img src={DownIcon} className="w-3 object-contain" alt="" />
      </div>
      {/* Hovered Container */}
      <div className=" shadow-lg hidden group-hover/j:grid grid-cols-5 absolute left-0 w-screen bg-white border border-slate-200 ">
        {/* First Colums */}
        <div className="flex flex-col justify-center items-start py-14 px-6 gap-3 text-sm border-r border-slate-300">
          <span className="font-bold text-base mb-5">New in</span>
          {linkscol1.map((link, index) => (
            <span
              className="cursor-pointer hover:text-red-700 transition duration-300 ease"
              key={index}
            >
              {link}
            </span>
          ))}
          <div>
            {/* First Column Image */}
            <div className=" group flex justify-center items-center overflow-hidden rounded-lg h-24 relative  cursor-pointer">
              <img
                className=" transition duration-500 ease group-hover:scale-125 h-28 rounded-lg mt-5  object-cover"
                src={Jewlerycol1Img}
                alt=""
              />
              <div className=" absolute  p-1 rounded-lg text-white flex flex-col justify-between items-center">
                <h1 className="font-extrabold text-lg">New Offer</h1>
                <p className="text-center">
                  10% Off for New Revolving Customers
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="flex flex-col justify-start items-start py-14 px-6 gap-3 text-sm  ">
          <span className="font-extrabold text-base mb-5">Curated Shops</span>
          {linkscol2.map((link, index) => (
            <span
              className="hover:text-red-700 cursor-pointer transition duration-300 ease"
              key={index}
            >
              {link}
            </span>
          ))}
        </div>
        {/* Third Column */}
        <div className="flex flex-col justify-start items-start py-14 px-6 gap-3 text-sm  ">
          <span className="font-extrabold text-base mb-5">Accessories</span>
          {linkscol3.map((link, index) => (
            <span
              className="hover:text-red-700 cursor-pointer transition duration-300 ease"
              key={index}
            >
              {link}
            </span>
          ))}
        </div>
        {/* Fourth Column */}
        <div className="flex flex-col justify-start items-start py-14 px-6 gap-3 text-sm  ">
          <span className="font-extrabold text-base mb-5">Bags</span>
          {linkscol2.map((link, index) => (
            <span
              className="hover:text-red-700 cursor-pointer transition duration-300 ease"
              key={index}
            >
              {link}
            </span>
          ))}
        </div>
        {/* Last Column */}
        <div className="flex flex-col justify-start items-start py-14 px-6 gap-3 text-sm  ">
          <span className="font-extrabold text-base mb-5">Watches</span>
          {linkscol3.map((link, index) => (
            <span
              className="hover:text-red-700 cursor-pointer transition duration-300 ease"
              key={index}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jewlery;
