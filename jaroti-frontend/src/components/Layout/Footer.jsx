import InstaImg from '../../assets/bg-image-arrivals.jpg';
import FacebookImg from '../../assets/facebook-white.png';
import InstagramImg from '../../assets/instagram.png';
import LogoWhite from '../../assets/logowhite.png';
import Payments from '../../assets/paymentsfooter.png';
import PintrestImg from '../../assets/pintrest-white.png';
import TwitterImg from '../../assets/twitter-white.png';
const Footer = () => {
  return (
    <div className="bg-black px-5">
      <div className=" gap-10 md:gap-0 w-full flex flex-col md:flex-row justify-between items-center text-white border-b  border-stone-500 md:py-5">
        <div className="md:w-[50%] flex flex-col justify-start items-start md:py-10   gap-5">
          <img src={LogoWhite} className="w-32 object-contain" alt="" />
          <p className="text-white/70 text-sm w-[80%] leading-7 ">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software.
          </p>
          <div className="flex gap-5">
            <img
              src={FacebookImg}
              className=" cursor-pointer w-7 object-contain"
              alt=""
            />
            <img
              src={TwitterImg}
              className=" cursor-pointer w-7 object-contain"
              alt=""
            />
            <img
              src={InstagramImg}
              className=" cursor-pointer w-7 object-contain"
              alt=""
            />
            <img
              src={PintrestImg}
              className=" cursor-pointer w-7 object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-[50%] flex flex-col justify-center items-start py-4 md:px-8 gap-5">
          <h1 className="font-extrabold text-xl">NEWSLETTER SIGN UP</h1>
          <p className="text-sm">
            Enjoy 15% off* your first order when you sign up to our newsletter
          </p>

          <div className="py-1 px-3 bg-neutral-800 w-full rounded-full flex gap-3">
            <input
              type="text"
              className="text-stone-100 text-sm w-full bg-transparent outline-none pl-2"
              placeholder="Your Email address here....."
            />
            <button className="py-3 px-6 uppercase bg-black text-white rounded-full font-bold hover:bg-white hover:text-black transition duration-300 ease text-sm ">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full py-12 grid grid-cols-1  md:grid-cols-5 gap-y-10 md:gap-5 border-b border-white/50">
        <div className="flex flex-col text-white gap-5 text-center md:text-start">
          <span
            className="text-lg
           font-extrabold uppercase mb-2"
          >
            Delivery & Return
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Check Order
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Delivery & Collection
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Careers
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Delivery Return
          </span>
        </div>
        <div className="flex flex-col text-white gap-5 items-center">
          <span
            className="text-lg
           font-extrabold uppercase mb-2"
          >
            About
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Our Brand
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Charity
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            CSR
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Carrers
          </span>
        </div>
        <div className="flex flex-col text-center md:text-start text-white gap-5">
          <span
            className="text-lg
           font-extrabold uppercase mb-2"
          >
            Customer Service
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Terms & Policies
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Contact Us
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Opening Hours
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Size Guides
          </span>
          <span className="text-sm text-white/50 cursor-pointer hover:text-white/100">
            Gift Cards
          </span>
        </div>
        <div className="w-full h-full md:col-span-2">
          <div className="w-full relative group/footer overflow-hidden h-[80%] rounded-lg">
            <img
              src={InstaImg}
              className="w-full group-hover/footer:scale-150   transition duration-300 ease  object-cover h-full rounded-md cursor-pointer overflow-hidden"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 text-white flex justify-center items-start flex-col gap-2 p-5 cursor-pointer">
              <h1 className="uppercase font-extrabold text-xl">
                10% off for new customers
              </h1>
              <span className="text-sm">Free express shopping</span>
              <button className="py-3 px-6 bg-black rounded-full uppercase mt-10">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-between py-5">
        <div>© Jaroti. All Rights Reserved.</div>
        <div>
          <img src={Payments} className="w-[90%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
