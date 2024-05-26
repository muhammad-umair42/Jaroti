import { useEffect, useRef, useState } from 'react';
import arrivalsBG from '../assets/bg-image-arrivals.jpg';
import CubeImg from '../assets/cubepng.png';
import DollarImg from '../assets/dollarpng.png';
import HeadSet from '../assets/headsetpng.png';
import HeroImg1 from '../assets/heroimg1.jpg';
import HeroImg2 from '../assets/heroimg2.jpg';
import ForWomenImg from '../assets/home1-bg-2.jpg';
import ImgShop1 from '../assets/imgshop1.jpg';
import ImgShop2 from '../assets/imgshop2.jpg';
import InstaImg2 from '../assets/insta-carousel-1.jpeg';
import InstaImg3 from '../assets/insta-carousel-2.jpeg';
import InstaImg4 from '../assets/insta-carousel-3.jpeg';
import InstaImg5 from '../assets/insta-carousel-5.jpeg';
import InstaImg6 from '../assets/insta-carousel-6.jpeg';
import InstaImg7 from '../assets/insta-carousel-8.jpeg';
import InstaImg8 from '../assets/insta-carousel-9.jpeg';
import InstaImg1 from '../assets/insta-carousel1.jpeg';
import ArrowRight from '../assets/rightarrow.png';
import smallImage from '../assets/sm-image-1.jpg';
import smallImage2 from '../assets/sm-image-3.jpg';
import truckImage from '../assets/truckpng.png';
import Layout from '../components/Layout/Layout';
import Product from '../components/Product';

const HomePage = () => {
  const instaimages = [
    InstaImg1,
    InstaImg2,
    InstaImg3,
    InstaImg4,
    InstaImg5,
    InstaImg6,
    InstaImg7,
    InstaImg8,
    ForWomenImg,
    HeroImg1,
    HeroImg2,
  ];
  const products = [
    {
      name: 'Gold Plated Earring',
      price: 10,
      img: HeroImg1,
    },
    {
      name: 'Gold Plated Earring',
      price: 10,
      img: HeroImg1,
    },
    {
      name: 'Gold Plated Earring',
      price: 10,
      img: HeroImg1,
    },
    {
      name: 'Gold Plated Earring',
      price: 10,
      img: HeroImg1,
    },
    {
      name: 'Gold Plated Earring',
      price: 10,
      img: HeroImg1,
    },
    {
      name: 'Gold Plated Earring',
      price: 10,
      img: HeroImg1,
    },
    {
      name: 'Gold Plated Earring',
      price: 10,
      img: HeroImg1,
    },
    {
      name: 'Gold Plated Earring',
      price: 10,
      img: HeroImg1,
    },
    {
      name: 'Gold Plated Earring',
      price: 10,
      img: HeroImg1,
    },
  ];
  const dummyCategories = [
    'Jewelry',
    '90s',
    'Boutique Collection',
    'Cubic Zirconia',
    'Earring Accessories',
    'Figaro Chain',
    'Gold Essentials',
    'Gold Plated Sterling Silver',
    'Jewellery Sets',
    'Link Chain',
    'Mariner Chain',
    'Precious Pieces',
    'Rope Chain',
    'Rose Gold Essentials',
    'Rose Gold Plated Sterling Silver',
    'Semi Precious Elements',
    'Sensitive Jewellery',
    'Silver Essentials',
    'Sterling Silver',
    'Shop all',
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [startInstaIndex, setStartInstaIndex] = useState(0);
  const containerRef = useRef(null);
  const instaContainerRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prevIndex =>
        prevIndex >= products.length - 4 ? 0 : prevIndex + 1,
      );
      setStartInstaIndex(prevIndex =>
        prevIndex >= instaimages.length - 9 ? 0 : prevIndex + 1,
      );
    }, 5000); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <Layout>
      <div className="mt-10 overflow-hidden">
        {/* Hero Section */}
        <section className="flex flex-col  md:flex-row gap-3 p-1">
          <div className=" md:w-[50%] flex justify-center items-center p-4 md:p-12">
            <div className="flex justify-center items-center flex-col gap-2">
              <h1 className="text-[30px] w-[90%] text-center font-poppins font-extrabold ">
                Rings Packs and Matching Sets
              </h1>
              <span className="uppercase text-sm ">
                now only $7 - limited time only
              </span>
              <button className=" group/btn uppercase flex justify-center items-center mt-10 bg-black text-white px-7 py-3 rounded-3xl">
                shop now{' '}
                <span className="group-hover/btn:pl-3 opacity-0  items-center justify-center transition-all group-hover/btn:opacity-100 duration-300 ease ">
                  <img src={ArrowRight} className="w-4" alt="" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex gap-2 w-full  justify-center items-center p-5">
            <img
              src={HeroImg1}
              className="w-[50%] h-[40vw] md:w-96 md:h-[35vw] object-cover "
              alt=""
            />
            <img
              src={HeroImg2}
              className="w-[50%] h-[40vw] md:w-96 md:h-[35vw] object-cover "
              alt=""
            />
          </div>
        </section>
        {/* Perks Section */}
        <section className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full px-5 py-8 gap-5 md:gap-0 md:px-6 md:py-16">
          <div className="w-full flex  gap-4 items-center justify-center">
            <img src={truckImage} className=" w-14 object-contain" alt="" />
            <div className=" w-max md:w-full flex flex-col justify-start gap-1 items-start  ">
              <h1 className="text-[20px] font-bold">Free Shipping</h1>
              <span className="text-sm">Tell about your service</span>
            </div>
          </div>
          <div className="w-full flex items gap-4 items-center justify-center">
            <img src={DollarImg} className=" w-14 object-contain" alt="" />
            <div className="flex flex-col justify-start gap-1 items-start w-max md:w-full ">
              <h1 className="text-[20px] font-bold">Free Shipping</h1>
              <span className="text-sm">Tell about your service</span>
            </div>
          </div>
          <div className="w-full flex items gap-4 items-center justify-center">
            <img src={HeadSet} className=" w-14 object-contain" alt="" />
            <div className="flex flex-col justify-start gap-1 items-start w-max md:w-full ">
              <h1 className="text-[20px] font-bold">Free Shipping</h1>
              <span className="text-sm">Tell about your service</span>
            </div>
          </div>
          <div className="w-full flex items gap-4 items-center justify-center">
            <img src={CubeImg} className=" w-14 object-contain" alt="" />
            <div className="flex flex-col justify-start gap-1 items-start w-max md:w-full ">
              <h1 className="text-[20px] font-bold">Free Shipping</h1>
              <span className="text-sm">Tell about your service</span>
            </div>
          </div>
        </section>

        {/* Img Shop Link Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-center relative gap-3 py-2 px-4 ">
          <div className="group/imglink flex items-center justify-center overflow-hidden  flex-1">
            <img
              src={ImgShop1}
              className="group-hover/imglink:scale-125 transition duration-300 ease h-[60vw] md:w-full md:h-auto object-cover rounded-lg"
              alt=""
            />
            <div className="absolute  md:top-[30%] flex items-center justify-center flex-col gap-2">
              <span className="uppercase font-bold text-sm text-center ">
                Up to 20 off
              </span>
              <h1 className="text-[2.5rem] font-extrabold tracking-widest">
                Love Your Way
              </h1>
              <button className="  uppercase flex justify-center items-center mt-5  bg-black text-white px-7 py-3 rounded-3xl">
                shop now{' '}
                <span className="group-hover/imglink:pl-3 opacity-0  items-center justify-center transition-all group-hover/imglink:opacity-100 duration-300 ease ">
                  <img src={ArrowRight} className="w-4" alt="" />
                </span>
              </button>
            </div>
          </div>
          <div className="group/imglink flex items-center justify-center overflow-hidden  flex-1">
            <img
              src={ImgShop2}
              className="group-hover/imglink:scale-125 transition duration-300 ease h-[60vw] md:h-auto md:w-full object-cover rounded-lg"
              alt=""
            />
            <div className="absolute  md:top-[30%] flex items-center justify-center flex-col gap-2">
              <span className="uppercase font-bold text-sm text-center ">
                Up to 20 off
              </span>
              <h1 className="text-[2.5rem] font-extrabold tracking-widest">
                Love Your Way
              </h1>
              <button className="  uppercase flex justify-center items-center mt-5  bg-black text-white px-7 py-3 rounded-3xl">
                shop now{' '}
                <span className="group-hover/imglink:pl-3 opacity-0  items-center justify-center transition-all group-hover/imglink:opacity-100 duration-300 ease ">
                  <img src={ArrowRight} className="w-4" alt="" />
                </span>
              </button>
            </div>
          </div>
        </section>
        {/* New Arrivals */}
        <section className="flex flex-col justify-center items-center w-full py-28 px-5">
          <div>
            <span className="text-xl font-bold uppercase">New Arrivals</span>
          </div>
          <div className="w-full h-full overflow-hidden relative py-8">
            <div
              className="flex gap-5 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${startIndex * 25}%)` }}
              ref={containerRef}
            >
              {products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </div>
          </div>
        </section>
        {/* NewArrivals Image Banner */}
        <section
          style={{ backgroundImage: `url(${arrivalsBG})` }}
          className="h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-origin-border  flex justify-center items-center  "
        >
          <div className="  w-full h-full flex items-center justify-center flex-col bg-slate-950/50 gap-5">
            <h1 className="text-center text-[3rem] md:text-[4rem] font-extrabold text-white">
              The Latest Look
            </h1>
            <p className="text-white text-xl w-[60%] text-center">
              New arrivals have hit the site. Shop them all before they all sell
              out!
            </p>

            <button className="px-7 py-3 font-bold text-sm uppercase bg-black text-white rounded-full mt-10 hover:bg-red-700 transition duration-300 ease">
              shop new arrivals
            </button>
          </div>
        </section>

        {/* Featured Products */}
        <section className=" py-14 px-4 flex flex-col w-full justify-center items-center gap-10">
          <div className="text-xl uppercase font-bold">Featured Products</div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-5  gap-y-20 gap-x-5 justify-center items-center w-full flex-wrap">
              {products.map((product, index) => (
                <Product key={index} product={product} width={'w-full'} />
              ))}
            </div>
          </div>
        </section>
        {/* Pendants for women */}
        <section className="flex md:flex-row gap-8 py-10 px-5">
          <div className="md:w-[50%] md:block hidden">
            <img
              src={ForWomenImg}
              className="object-cover w-full h-[40vw]"
              alt=""
            />
          </div>
          <div className="md:w-[50%] flex flex-col items-center justify-start gap-10">
            <div className="pt-10 flex flex-col items-center justify-center gap-5">
              <h1 className="text-[2.5rem] text-center font-extrabold">
                Necklaces and Pendants for Women
              </h1>
              <p>Now Only $7 – Limited Time Only</p>
              <button className="mt-5 px-5 py-2 bg-black text-white uppercase rounded-full hover:bg-red-700 transition duration-300 ease ">
                Shop now
              </button>
            </div>
            <div className="py-4 px-5 flex gap-5 ">
              <img
                src={smallImage}
                className="md:w-[12vw] md:h-[12vw] w-[22vw] h-[22vw] rounded-lg object-cover cursor-pointer"
                alt=""
              />
              <img
                src={ForWomenImg}
                className="md:w-[12vw] md:h-[12vw] w-[22vw] h-[22vw] rounded-lg object-cover cursor-pointer"
                alt=""
              />
              <img
                src={smallImage2}
                className="md:w-[12vw] md:h-[12vw] w-[22vw] h-[22vw] rounded-lg object-cover cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Shop by category */}
        <section className="w-full py-10 px-5 flex flex-col justify-center items-center gap-10 mb-10">
          <div className="uppercase text-xl font-bold">Shop by category</div>
          <div className="w-full grid-cols-2 grid md:grid-cols-4 justify-between gap-y-3">
            {dummyCategories.map((category, index) => (
              <div
                key={index}
                className="cursor-pointer hover:text-red-700 transition duration-300 ease"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full px-10">
          <div className="group/insta w-full h-full flex items-center justify-center overflow-hidden relative py-8">
            <div className="group-hover/insta:opacity-0 transition duration-300 ease absolute z-10   text-center">
              <span className="bg-white px-14 uppercase border border-slate-200 py-4 text-xl font-bold rounded-full">
                Insta Shop
              </span>
            </div>
            <div
              className=" flex gap-5 transition-transform duration-500 ease-out relative"
              style={{ transform: `translateX(-${startInstaIndex * 18}%)` }}
              ref={instaContainerRef}
            >
              {instaimages.map((img, index) => (
                <div
                  className="flex justify-center items-center relative"
                  key={index}
                >
                  <div className="w-full h-full cursor-pointer rounded-lg transition duration-300 ease hover:bg-slate-900/40    absolute"></div>
                  <img
                    src={img}
                    className=" cursor-pointer min-w-[15vw] h-[14vw] object-cover rounded-lg"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
