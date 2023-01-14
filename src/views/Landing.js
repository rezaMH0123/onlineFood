import React, { useLayoutEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "../../src/swiper.css";
import Input from "react-phone-number-input/input";

import iphone from "../assets/icons/fig-iphone.png";
import appIco from "../assets/icons/0.png";

import food1 from "../assets/foods/4.jpg";
import food2 from "../assets/foods/7.jpg";
import food3 from "../assets/foods/8.jpg";
import food4 from "../assets/foods/9.jpg";
import FoodCard from "../components/FoodCard";

import { FoodContext } from "../context/FoodContextProvider";
import ShoppingCard from "../components/ShoppingCard";

const mobileAppAownload = [
  "0.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "6.png",
];
const relatedIco = ["facebook", "instagram", "in", "tellegram", "twitter"];

const popularFoods = [
  { id: 1, name: "پیتزا" },
  { id: 2, name: "کباب" },
  { id: 3, name: "سوپ" },
  { id: 4, name: "ساندویچ" },
  { id: 5, name: "غذا ایرانی" },
  { id: 6, name: "سوخاری" },
  { id: 7, name: "پاستا" },
  { id: 8, name: "سالاد" },
  { id: 9, name: "استیک" },
  { id: 10, name: "صبحانه" },
];

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
const Landing = () => {
  SwiperCore.use([Autoplay]);
  const [width] = useWindowSize();
  const foodContext = useContext(FoodContext);
  const [value, setValue] = useState();
  const [shoppingCartBool, setShoppingCardBool] = useState(false);
  window.addEventListener("scroll", () => {
    setShoppingCardBool(false);
  });
  return (
    <div className="w-full">
      <div className="header bg-white h-[330px] ">
        <div className="main-header border-b border-gray-200 flex bg-white h-[100px] fixed top-0 left-0 right-0 z-20">
          <div className="flex-1 flex items-center pl-2">
            <div className=" cursor-pointer bg-[#ff0000]  md:w-20 md:h-12 w-12 h-8 rounded-md  md:ml-4">
              <img
                onClick={() => setShoppingCardBool((prev) => !prev)}
                alt="shopingCart"
                className="md:w-18 md:h-10 w-16 h-9 relative top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] p-2 md:p-1"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8UlEQVR4nO2bv2sUQRTH32miCBpBAxIRkYBBawsNioWFP5o0aq9WNooRNFr4Aws9wfijsFBzAQsb/wJBbSyEWEkURNCEROHAaKFIMIp+ZHDu8m7NWdzMujuZ/cDCMnvMm/fl3cx7M7siBQUFBQV/AHqAE8BA4jJtPTLfAd7SnDcSuQDIfAdYD5wByuqKR4C5KARoZCCw6xDQJR4FCJHvwHmgFKsANS76EKAc0HUZeKLG/qOlXAaFBAawAHigXDgZlQAG4Khy4YZEKMCwcuFUVAIA7cAn5cKW2ATYo4Y/2dJSSNgC6PC/0mondSTs8N8cmwC7ncM/cAEqauiDLh3VkbDC/6PT7F8jUAH8hH/AAvgJ/xAF8Br+gQqwSw35nVP4ByrAkBryVR8d1pGcA7QBH2ZHTG9sAuz0Gv4BCnDHa/iHJEAq4R+YAP7D3wDM2E5nJMcAt5UA1312XAa+Apck3+E/pQTYKjFBY/i/N7vBEhPAIyXANYkJ4KBy/hewUWIAWAKcBn4qASppGiwB24H+jE98LwD3gapeooFRoCMt57uBZ+SXp8CqtJzvBCbIJ5P26KstFecNZkdFGfxmy80sT33PAYfNNjewUNIGGFcC7JXYYDYVNiyV2KAxAvZJbPD3HFD5D0vdEbOZmYuUlmxXgRfAtqw1EJsHjGQkgpmD+rLWQBKZYNpL3T3gixLB3K+WmADWAWPO5/shA/QpAV7l6S/Qb+9LKdtcbktcw3Satlothkxbt3gAWAscT77MCDy2th76sJPGMjhhfuNoY4VKuMYTzxYDm4BFzs54LIaG7L2XCcq8x6v6qkqeoEkxZNJi1T7maOOl6utA4tlZuyt908WG92IIWKYjw9GGPs/vSrzr+9m2m8mw3dUfb8UQsN9jBIzOFQGJV12mXH3xWQwNe54DzAcN+gOHu/akZ1q13/Lnlf9VYKWjjQ7g9T9sVDNNhWleDI14zAPWJD5wqPEc2ODDRhCZINALHLNJ0Y609wR+AxbcVTfLs9cUAAAAAElFTkSuQmCC"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <div className="logo-svg flex justify-center items-center md:w-8/12 md:h-4/6 w-7/12 h-3/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 98 24"
                data-theme-logo="je-logo"
                data-test-id="header-logo"
                className="c-ficon c-ficon--logo-justeat Logo_c-logo-img_3AhXf h-full"
              >
                <path d="M10.97.5c.45-.3 1.04-.3 1.5 0 1.15.72 2.26 1.52 3.31 2.38 0 0 .29.2.3-.14-.03-.43 0-.87.07-1.3a.6.6 0 01.55-.37s1.3.06 2.13.17a.8.8 0 01.7.71s.53 3.53.65 4.8c0 0 .1.65 1.04 1.75 0 0 1.92 2.67 2.14 3.18 0 0 .44.92-.51 1.04 0 0-1.75.18-1.92.22a.43.43 0 00-.38.47s-.1 6.14-.54 9.08c0 0-.12 1.17-.77 1.15 0 0-1.8-.06-2.21-.05 0 0-.18 0-.16-.24 0 0 .92-9.57.3-14.4 0 0-.03-.63-.5-.77 0 0-.44-.17-.86.38a15.14 15.14 0 00-2.84 8.64s-.05 1.52.18 1.9c0 0 .15.27.9.33l.93.13s.18 0 .16.23c0 0-.21 2.8-.28 3.3 0 .12-.02.23-.06.34 0 0-.04.09-.33.08 0 0-4.15-.03-4.62 0 0 0-.2 0-.24-.1-.04-.1-.29-3.63-.28-4.13 0-.1.05-.2.15-.24a2.48 2.48 0 001.15-1.82c.05-.54.05-1.07.02-1.6 0 0 .15-5.4.2-6.26 0 0 .02-.29-.36-.34a.36.36 0 00-.27.04.36.36 0 00-.16.22v.03c0 .03-.27 3.55-.22 4.95 0 0 .1.92-.55.94 0 0-.62.1-.65-.67 0 0 .05-3.46.2-5.16 0-.2-.14-.36-.34-.38a.38.38 0 00-.43.3v.04s-.27 3.3-.22 5.04c0 0 .08.85-.6.82 0 0-.56.06-.6-.69 0 0 .16-4.72.2-5.09a.38.38 0 00-.34-.36h-.04a.38.38 0 00-.41.32v.03s-.25 5.66-.22 7.32c0 0-.02 1.7 1.25 2.4 0 0 .18.1.19.27 0 0 .14 3 .27 3.96 0 0 .05.24-.16.24l-3.19.08a.65.65 0 01-.65-.61 70.71 70.71 0 01-.6-9.58.49.49 0 00-.37-.53S.94 12.8.55 12.71a.68.68 0 01-.41-1A32.72 32.72 0 0110.97.51zm22.46 8.88h-3.15c-1.02 0-1.02 0-1.23 1.19-.22 1.18-.21 1.22.72 1.22h1.87l-1.06 6.06c-.26 1.35-.85 2.28-2.68 2.83-.47.13-.6.3-.6.5.04.35.14.68.3.98.3.72.47.85.72.85.3-.03.6-.09.9-.17 2.6-.85 3.66-2.84 4.08-5.2l1.2-6.82c.2-1.44.2-1.44-1.07-1.44m10.67 0c-1.27 0-1.27 0-1.44 1.06l-.92 5.5c-.26 1.61-.68 2.54-2.26 2.54-1.57 0-2.08-.93-1.83-2.37l.9-5.25c.25-1.48.2-1.48-1.1-1.48-1.33 0-1.33 0-1.5 1.02l-.93 5.5c-.56 3.13 1.4 5.07 4.17 5.07 3.1 0 4.67-1.39 5.18-4.69l.94-5.46c.2-1.44.13-1.44-1.2-1.44m5.82 9.02c1.02-.05 1.57-.51 1.57-.97 0-.6-.72-.8-1.7-1.1-1.91-.6-3.66-1.27-3.66-3.3 0-2.42 2-3.73 4.51-3.73 1 0 2.02.04 3.02.13.68.08.85.3.64 1.35-.22 1.06-.47 1.14-1.06 1.1-.73-.04-1.67-.13-2.77-.13-1.27 0-1.66.47-1.66.9 0 .54.51.84 1.7 1.18 2.21.63 3.66 1.52 3.66 3.43 0 2.24-1.66 3.55-4.34 3.63-1.28.05-2.56-.02-3.83-.2-.85-.13-.9-.13-.68-1.36.21-1.1.21-1.18 1.02-1.1 1.18.15 2.38.2 3.57.17m13.91-9.02h-7.18c-1.02 0-1.02 0-1.24 1.23-.21 1.23-.16 1.23.73 1.23h2.34l-1.32 7.59c-.26 1.48-.21 1.48 1.1 1.48 1.24 0 1.28 0 1.45-1.06l1.36-8h2.26c1.01 0 1.01 0 1.23-1.22.21-1.23.2-1.23-.73-1.23m12.68 2.41c1.02 0 1.02 0 1.23-1.23.22-1.22.21-1.22-.72-1.22h-5.15c-1.83 0-1.78 0-2.08 1.82l-1.32 7.65c-.34 2-.3 2 1.53 2h5.02c1.07 0 1.02 0 1.24-1.2.2-1.18.2-1.22-.73-1.22H71.2l.34-2.2h3.62c.97 0 .97 0 1.14-1.14.17-1.15.17-1.19-1.15-1.19h-3.19l.35-2.07h4.2zm5.43 4.05l1.66-3.64c.13-.3.13-.3.34-.3.21 0 .21 0 .26.34l.5 3.6h-2.76zm4.5-5.08c-.24-1.44-.24-1.44-2.29-1.44-1.91 0-1.87 0-2.47 1.19l-4.3 8.93c-.63 1.26-.5 1.39 1.07 1.39 1.24 0 1.24 0 1.75-1.14l.67-1.53h4.17l.21 1.53c.18 1.14.22 1.14 1.45 1.14 1.4 0 1.53-.08 1.28-1.48l-1.53-8.59zm10.18-1.4H89.4c-1.02 0-1.02 0-1.23 1.23-.21 1.23-.17 1.23.72 1.23h2.34l-1.32 7.59c-.25 1.48-.21 1.48 1.1 1.48 1.24 0 1.28 0 1.45-1.06l1.37-8h2.25c1.02 0 1.02 0 1.23-1.22.21-1.23.26-1.23-.68-1.23"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center h-full flex-1">
            <div className="flex justify-center items-center border md:mr-4 mr-2 cursor-pointer text-center  border-red-500 rounded-md h-fit md:p-3 p-1 md:text-3xl text-xl text-red-600">
              <p>ورود</p>
            </div>
            <div className="text-3xl mr-2 cursor-pointer hidden md:block ">
              ثبت نام
            </div>
          </div>
        </div>
        <div className="address flex justify-center items-center relative top-[100px] h-[70px]">
          <div className="flex flex-row-reverse  h-5/6 w-44 cursor-pointer">
            <div className="address-logo flex items-center md:w-8 w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <p className="flex items-center mr-2 text-2xl">در</p>
            <span className="text-[#ff0000] text-2xl flex items-center mr-2">
              طهران
            </span>
            <span className="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#ff0000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </div>
        <form>
          <div className="serching flex flex-row-reverse items-center justify-center  bg-[#f8f8f8] relative top-[110px] h-[100px] ">
            <div className="search-input flex flex-row-reverse items-center pr-2  md:w-10/12 w-8/12 h-[60%] bg-white rounded-md">
              <div className="search-logo flex flex-row-reverse items-center h-[70%] w-full">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  style={{ transform: "rotateY(180deg)" }}
                  className="pointer-events-none inset-y-0 left-0 h-full w-8 fill-slate-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>

                <input
                  className="peer h-full w-full outline-none text-right text-sm text-gray-700 pr-2 mr-2"
                  type="text"
                  id="search"
                  placeholder="جست و جو رستوران یا غذا"
                />
              </div>
            </div>
            <div className=" search-btn mr-2 md:w-32 w:24 ml-2 h-[60%]">
              <button
                type="submit"
                className="text-white  bg-[#ef4123] hover:bg-[#cb3c23] focus:ring-4 focus:outline-non font-medium rounded-lg md:text-lg text-xs px-4  w-full h-full"
              >
                جست و جو
              </button>
            </div>
          </div>
        </form>
      </div>
      {shoppingCartBool ? (
        <div
          style={{ transition: "all 500ms" }}
          className="fixed top-[13.5%] left-0 w-64 h-full border border-gray-200 bg-white z-40"
        >
          <ShoppingCard foodCount={foodContext.countOfBuy} />
        </div>
      ) : (
        <div className=" w-0"></div>
      )}

      <div className="body w-full bg-white flex flex-col items-center   h-fit pt-4">
        <div className="content w-[85%] h-full">
          <div className="slider rounded-2xl w-[100%] md:h-[450px] h-[250px] mt-8">
            <Swiper
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwipe rounded-2xl"
            >
              <SwiperSlide>
                <img alt="food1" src={food1} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="food2" src={food2} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="food3" src={food3} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="food4" src={food4} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="popular text-right  w-full h-fit p-4 mt-16">
            <p className="md:text-5xl text-3xl">محبوب ترین ها</p>
            <div className="w-full h-full flex justify-center">
              <div className=" w-[95%] h-4/5 mt-8 grid md:grid-cols-5 grid-cols-2  gap-4">
                {popularFoods.map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg cursor-pointer h-32"
                  >
                    <img
                      className="rounded-lg w-full h-full"
                      alt="pfood"
                      src={require(`../assets/foods/popular/${item.id}.jpg`)}
                    />
                    <span className="absolute right-3 bottom-3 text-white text-2xl">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="Discount text-right w-full h-fit mt-16">
            <p className="md:text-5xl text-3xl mb-6">تخفیف دار ها</p>
            <div className="w-full h-full flex justify-center">
              <div className="w-[95%]  h-4/5 mt-4">
                <Swiper
                  slidesPerView={width < 400 ? 1 : width < 720 ? 2 : 3}
                  spaceBetween={25}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper flex flex-row-reverse rounded-lg"
                >
                  {foodContext.foods.map((item, index) => (
                    <div key={index}>
                      <SwiperSlide key={index} className="rounded-lg ">
                        <Link
                          to={`/food/${item.id}`}
                          state={{ data: item }}
                          key={index}
                        >
                          <FoodCard
                            imgSrc={{
                              mainfood: require(`../assets/foods/discount/0.jpg`),
                              lable: require(`../assets/storeLable/0.png`),
                            }}
                            name={item.foodName}
                            Ncomment={item.Ncomment}
                            discount={item.discount ? true : false}
                            discountNum={item.discount}
                            address={item.addres}
                          />
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="best-seller text-right w-full h-fit mt-24">
            <p className="md:text-5xl text-3xl mb-6">پرفروش ترین ها</p>
            <div className="w-full h-full flex justify-center">
              <div className="w-[95%]  h-4/5 mt-4">
                <Swiper
                  slidesPerView={width < 400 ? 1 : width < 720 ? 2 : 3}
                  spaceBetween={25}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper flex flex-row-reverse rounded-lg"
                >
                  {foodContext.foods.map((item, index) => (
                    <div key={index}>
                      <SwiperSlide key={index} className="rounded-lg ">
                        <Link
                          to={`/food/${item.id}`}
                          state={{ data: item }}
                          key={index}
                        >
                          <FoodCard
                            imgSrc={{
                              mainfood: require(`../assets/foods/discount/0.jpg`),
                              lable: require(`../assets/storeLable/0.png`),
                            }}
                            name={item.foodName}
                            Ncomment={item.Ncomment}
                            discount={item.discount ? true : false}
                            discountNum={item.discount}
                            address={item.addres}
                          />
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="newest text-right w-full h-fit mt-24">
            <p className="md:text-5xl text-3xl mb-6">جدید ترین ها</p>
            <div className="w-full h-full flex justify-center">
              <div className="w-[95%]  h-4/5 mt-4">
                <Swiper
                  slidesPerView={width < 400 ? 1 : width < 720 ? 2 : 3}
                  spaceBetween={25}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper flex flex-row-reverse rounded-lg"
                >
                  {foodContext.foods.map((item, index) => (
                    <div key={index}>
                      <SwiperSlide key={index} className="rounded-lg ">
                        <Link
                          to={`/food/${item.id}`}
                          state={{ data: item }}
                          key={index}
                        >
                          <FoodCard
                            imgSrc={{
                              mainfood: require(`../assets/foods/discount/0.jpg`),
                              lable: require(`../assets/storeLable/0.png`),
                            }}
                            name={item.foodName}
                            Ncomment={item.Ncomment}
                            discount={item.discount ? true : false}
                            discountNum={item.discount}
                            address={item.addres}
                          />
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="app-promotion bg-[#ddf0e2] w-full h-[650px] mt-16 flex flex-row-reverse">
          <div className="app-text flex flex-col items-center h-full  md:w-[60%] w-full ">
            <h1 className="md:text-4xl text-2xl font-bold mt-24">
              JUST EAT اپلیکیشن موبایل
            </h1>
            <p className="mt-4 w-5/6 text-center">
              برای دریافت لینک دانلود اپلیکیشن دلینو، شماره موبایلت رو وارد کن
            </p>
            <form>
              <div className="flex flex-row-reverse mt-8">
                <Input
                  className="h-12 md:w-80 w-48 rounded-r-lg outline-none md:text-2xl text-xl  text-center"
                  placeholder="+98 912 xxxxxxx"
                  value={value}
                  onChange={setValue}
                />
                <button className="bg-[#ff0000] font-bold text-white px-4 rounded-l-lg">
                  دریافت لینک دانلود
                </button>
              </div>
            </form>
            <div className=" md:w-[55%] w-[70%] mt-10 flex justify-center h-fit">
              <div className="w-fit grid   md:grid-cols-3 grid-cols-2 gap-3 ">
                {mobileAppAownload.map((item, index) => (
                  <div
                    key={index}
                    className="bg-black h-10 w-28 rounded-md cursor-pointer"
                  >
                    <img
                      alt="app-downlod"
                      src={require(`../assets/mobile-app-download/${item}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="app-img md:flex md:justify-end h-full w-[40%]   hidden">
            <img className="h-full" alt="app-img" src={iphone} />
          </div>
        </div>
      </div>
      <div className="footer border flex flex-col items-center border-gray-700 bg-gray-600 h-fit">
        <hr className="mt-16 w-[90%] justify-center"></hr>
        <div className="w-full h-full flex md:flex-row-reverse flex-col ">
          <div className=" flex  flex-col items-end flex-1 h-full  p-4">
            <div className="flex flex-row-reverse">
              <div className="img w-10 h-10 rounded-full md:block hidden">
                <img
                  className="w-full h-full rounded-full"
                  alt="app-ico"
                  src={appIco}
                />
              </div>

              <ul className="flex flex-wrap justify-center mr-2">
                <li className="text-white cursor-pointer m-2 hover:font-bold">
                  وبلاگ دلینو
                </li>
                <li className="text-white cursor-pointer m-2 hover:font-bold">
                  درباره
                </li>
                <li className="text-white cursor-pointer m-2 hover:font-bold">
                  تماس با ما
                </li>
                <li className="text-white cursor-pointer m-2 hover:font-bold">
                  قوانین
                </li>
                <li className="text-white cursor-pointer m-2 hover:font-bold">
                  سوالات متداول
                </li>
                <li className="text-white cursor-pointer m-2 hover:font-bold">
                  حریم شخصی
                </li>
                <li className="text-white cursor-pointer m-2 hover:font-bold">
                  ثبت نام رستوران
                </li>
              </ul>
            </div>
            <p className=" mt-8 text-[#e3e3e3] text-right">
              تمامی لوگوها و اطلاعات رستوران ها با احترام متعلق به مالکین
              رستوران ها است و امتیاز استفاده از این اطلاعات تنها برای دلینو
              مجاز است
            </p>
          </div>
          <div className="flex-1 flex flex-col md:items-start items-center h-full p-4">
            <ul className="flex gap-4 mt-3">
              {relatedIco.map((item, index) => (
                <div key={index}>
                  <li className="" key={index}>
                    <a href="/#">
                      {item === "facebook" ? (
                        <img
                          className="w-7 h-7 relative -top-1"
                          alt={`${item}`}
                          src={require(`../assets/icons/${item}.png`)}
                        />
                      ) : (
                        <img
                          className="w-5 h-5"
                          alt={`${item}`}
                          src={require(`../assets/icons/${item}.svg`)}
                        />
                      )}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
            <div className="flex mt-20 gap-4">
              <div className=" border border-[rgba(255,255,255,.1)] h-12 w-40">
                <img
                  className="w-full h-full cursor-pointer"
                  alt="app-downlod"
                  src={require(`../assets/mobile-app-download/0.png`)}
                />
              </div>
              <div className=" border border-[rgba(255,255,255,.1)] h-12 w-40">
                <img
                  className="w-full h-full cursor-pointer"
                  alt="app-downlod"
                  src={require(`../assets/mobile-app-download/3.png`)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
