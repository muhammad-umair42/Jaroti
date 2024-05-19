import DownIcon from '../../assets/dropdownIcon.png';
import HandBag1 from '../../assets/handbags-nav-1.jpg';
import HandBag2 from '../../assets/handbags-nav-2.jpg';
import HandBag3 from '../../assets/handbags-nav-3.jpg';
const HandBags = () => {
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
    <div className="group/h">
      <div className="hover:text-red-700 transition duration-300 ease flex items-center justify-center cursor-pointer">
        <span>HandBags</span>
        <img src={DownIcon} className="w-3 object-contain" alt="" />
      </div>
      <div className=" shadow-lg hidden group-hover/h:flex  absolute left-0 w-screen bg-white border border-slate-200">
        {/* Grid Left Container */}
        <div className="grid grid-cols-2">
          {/* Col-1 */}
          <div className="flex flex-col justify-start items-start py-14 px-6 gap-3 text-sm  ">
            <span className="font-extrabold text-base mb-5">
              Shop By Product
            </span>
            {linkscol2.map((link, index) => (
              <span
                className="hover:text-red-700 cursor-pointer transition duration-300 ease"
                key={index}
              >
                {link}
              </span>
            ))}
          </div>
          {/* Col-2 */}
          <div className="flex flex-col justify-start items-start py-14 px-6 gap-3 text-sm  ">
            <span className="font-extrabold text-base mb-5">
              Shop By Product
            </span>
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
        {/* Right Images */}
        <div className="flex-1  flex gap-10 justify-start items-start px-10 py-20">
          <div className="cursor-pointer rounded-lg overflow-hidden group relative flex justify-center items-end">
            <img
              src={HandBag1}
              className="transition duration-500 ease hover:scale-125 w-full object-cover rounded-lg"
              alt=""
            />
            <div className="cursor-pointer absolute text-xl font-extrabold text-white mb-4">
              Bracelets
            </div>
          </div>
          <div className="cursor-pointer rounded-lg overflow-hidden group relative flex justify-center items-end">
            <img
              src={HandBag2}
              className="transition duration-500 ease hover:scale-125 w-full object-cover rounded-lg"
              alt=""
            />
            <div className="mb-4 absolute text-xl font-extrabold text-white">
              Earrings
            </div>
          </div>
          <div className="rounded-lg overflow-hidden group relative flex justify-center items-end">
            <img
              src={HandBag3}
              className="transition duration-500 ease hover:scale-125 w-full object-cover rounded-lg"
              alt=""
            />
            <div className="mb-4 absolute text-xl font-extrabold text-white">
              Neckless
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandBags;
