import { PiChartLineUpBold } from "react-icons/pi";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TbTargetArrow } from "react-icons/tb";
import { Input } from "@/components/ui/input";

const About = () => {
   // Use an array of booleans to track collapsed state for each card
   const [collapsedStates, setCollapsedStates] = useState([true, true, true]);

   const handleSetIsCollapsed = (index: number) => {
      // Toggle the collapsed state for the clicked card
      setCollapsedStates((prevStates) =>
         prevStates.map((state, i) => (i === index ? !state : state))
      );
   };

   return (
      <main className="flex flex-col">
         <section
            className="relative flex justify-center py-8 md:py-14 px-5 sm:px-8 lg:px-10"
            style={{
               backgroundImage:
                  "url(https://i.postimg.cc/2jTGnrCZ/istockphoto-1434132794-2048x2048-1.jpg)", // https://i.postimg.cc/G3Nr306k/istockphoto-1261597991-2048x2048-1.jpg
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "top",
               backgroundPositionY: "20%",
            }}
         >
            {/* Blue transparent overlay */}
            <div className="absolute inset-0 bg-mutedGray opacity-60" />

            <div className="container min-h-64 flex flex-col items-center justify-center gap-4 text-center z-50">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
                  About Us
               </h1>
            </div>
         </section>

         <section className="flex flex-col items-center bg-cultured dark:bg-gray py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
            <div className="container flex">
               <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16">
                  <div className="w-full h-full md:min-h-64 flex flex-col gap-3 bg-richElectricBlue text-white px-6 py-5 rounded-xl">
                     <h2 className="flex items-center gap-2 md:text-xl font-bold">
                        <span className="h-3/4 w-1 bg-gray" />
                        About Tax Returns
                     </h2>
                     <h3 className="text-xl md:text-3xl font-medium">
                        Lorem ipsum dolor sit amet.
                     </h3>
                     <p className="max-w-md text-xs md:text-sm text-ghostWhite">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci dignissimos odit, iusto praesentium sequi rem
                        ullam velit sunt, fuga soluta reiciendis atque quia
                        accusantium eius. Rerum dolorem suscipit id, rem
                        exercitationem autem qui voluptas dolore quidem iste
                        corporis natus veniam pariatur tempore animi.
                     </p>
                  </div>
                  <div
                     className="w-full h-full min-h-64 md:min-h-fit flex flex-col gap-4 rounded-ss-xl md:rounded-ss-[36px] rounded-ee-xl md:rounded-ee-[36px] overflow-hidden"
                     style={{
                        backgroundImage:
                           "url(https://i.postimg.cc/pdGkTv2f/istockphoto-1500910131-2048x2048-1.jpg)", // https://i.postimg.cc/d372DZWv/istockphoto-1493271502-2048x2048-1.jpg
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        backgroundPositionY: "center",
                     }}
                  />
               </div>
            </div>
         </section>

         <section
            className="relative flex flex-col items-center gap-10 md:gap-14 py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10"
            style={{
               backgroundImage:
                  "url(https://i.postimg.cc/1RcFvvp6/istockphoto-1964940819-2048x2048-1.jpg)",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "top",
               backgroundPositionY: "40%",
            }}
         >
            {/* Blue transparent overlay */}
            <div className="absolute inset-0 bg-richElectricBlue opacity-60" />

            <div className="container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5 md:gap-8 z-50">
               <div className="w-full h-full min-w-36 min-h-32 max-w-52 flex flex-col items-center justify-center gap-2 text-white text-center p-6 border border-lightGray rounded-sm">
                  <p className="text-2xl md:text-4xl font-bold">20+</p>
                  <span className="text-sm font-medium">Years Experience</span>
               </div>
               <div className="w-full h-full min-w-36 min-h-32 max-w-52 flex flex-col items-center justify-center gap-2 text-white text-center p-6 border border-lightGray rounded-sm">
                  <p className="text-2xl md:text-4xl font-bold">35+</p>
                  <span className="text-sm font-medium">Award wins</span>
               </div>
               <div className="w-full h-full min-w-36 min-h-32 max-w-52 flex flex-col items-center justify-center gap-2 text-white text-center p-6 border border-lightGray rounded-sm">
                  <p className="text-2xl md:text-4xl font-bold">1500+</p>
                  <span className="text-sm font-medium">Happy Customers</span>
               </div>
               <div className="w-full h-full min-w-36 min-h-32 max-w-52 flex flex-col items-center justify-center gap-2 text-white text-center p-6 border border-lightGray rounded-sm">
                  <p className="text-2xl md:text-4xl font-bold">100+</p>
                  <span className="text-sm font-medium">Our Expert Staffs</span>
               </div>
            </div>
         </section>

         <section className="flex flex-col items-center py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
            <div className="container flex flex-col gap-8">
               <h2 className="text-2xl md:text-4xl font-bold text-center">
                  Why Us
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12">
                  {[
                     {
                        icon: (
                           <PiChartLineUpBold className="w-5 h-5 text-white" />
                        ),
                        title: "Lorem ipsum.",
                        bg_image:
                           "https://i.postimg.cc/Mp23R68x/istockphoto-1089222846-2048x2048-2.jpg",
                     },
                     {
                        icon: (
                           <FaMagnifyingGlassChart className="w-5 h-5 text-white" />
                        ),
                        title: "Lorem ipsum.",
                        bg_image:
                           "https://i.postimg.cc/76p9r4Dm/istockphoto-1445992477-2048x2048-1.jpg",
                     },
                     {
                        icon: <FaUserTie className="w-5 h-5 text-white" />,
                        title: "Lorem ipsum.",
                        bg_image:
                           "https://i.postimg.cc/qRf6kvhh/istockphoto-1254618751-2048x2048-1.jpg",
                     },
                  ].map((item, idx) => (
                     <div
                        key={idx}
                        className="relative w-full h-64 flex cursor-pointer"
                        style={{
                           backgroundImage: `url(${item.bg_image})`,
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover",
                           backgroundPosition: "top",
                           backgroundPositionY: "40%",
                        }}
                        onClick={() => handleSetIsCollapsed(idx)}
                     >
                        <div className="absolute inset-0 bg-gray opacity-30" />

                        <div
                           className={`w-full flex self-end ${
                              collapsedStates[idx] ? "h-12" : "h-full"
                           } z-50 transition-[height] duration-300 ease-in-out`}
                        >
                           <div className="flex items-center justify-center bg-blue-500 bg-opacity-80 p-3">
                              {item.icon}
                           </div>
                           <div className="w-full flex flex-col gap-2 justify-center p-5 bg-richElectricBlue bg-opacity-60 text-white">
                              <h3 className="text-sm font-bold">
                                 {item.title}
                              </h3>

                              {!collapsedStates[idx] && (
                                 <span className="max-w-52 text-xs">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Obcaecati eligendi iste
                                    architecto ullam ipsum consequatur
                                    voluptatum!
                                 </span>
                              )}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="relative flex flex-col items-center py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
            <div
               className="absolute top-0 bottom-[55%] right-0 left-0 md:top-0 md:bottom-0 md:left-0 md:right-[55%] -z-[1]"
               style={{
                  backgroundImage:
                     "url(https://i.postimg.cc/MZfx7mLS/istockphoto-1397274177-2048x2048-1.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
               }}
            >
               <div className="absolute inset-0 bg-richElectricBlue opacity-60" />
            </div>
            <div
               className="absolute top-[45%] bottom-0 right-0 left-0 md:top-0 md:bottom-0 md:right-0 md:left-[45%] bg-cultured dark:bg-darkGray -z-[1]"
               style={{
                  backgroundImage:
                     "url(https://i.postimg.cc/4329z6xr/Pngtree-lines-seamless-abstract-pattern-vector-9084491.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "exclusion",
               }}
            ></div>

            <div className="container flex flex-col md:flex-row gap-10 z-50">
               <div className="w-full flex justify-center md:justify-start">
                  <div className="max-w-96 md:max-w-72 flex flex-col items-center md:items-start gap-5 text-white">
                     <h2 className="text-2xl md:text-4xl font-bold">
                        Our <span className="text-blue-950">Services</span>
                     </h2>
                     <p className="w-full text-center md:text-start">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Debitis sapiente quaerat sunt, aut provident quas
                        aliquam consequuntur mollitia commodi sed laudantium
                        beatae deleniti necessitatibus?
                     </p>
                     <Button className="w-40 bg-blue-800 bg-opacity-40 rounded-none hover:bg-opacity-70">
                        Learn More
                     </Button>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center md:justify-items-start">
                  <div className="w-full max-w-60 md:max-w-none min-h-56 md:min-h-72 h-full flex flex-col gap-4 bg-white dark:bg-gray p-6 shadow-md dark:shadow-md-dark ">
                     <TbTargetArrow className="w-10 h-10" />

                     <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-bold">Lorem Ipsum</h3>
                        <p className="text-sm">
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Harum accusantium nostrum, iusto delectus ea
                           sunt.
                        </p>
                     </div>
                  </div>
                  <div className="w-full max-w-60 min-h-56 md:min-h-72 h-full flex flex-col gap-4 bg-white dark:bg-gray p-6 shadow-md dark:shadow-md-dark ">
                     <TbTargetArrow className="w-10 h-10" />

                     <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-bold">Lorem Ipsum</h3>
                        <p className="text-sm">
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Harum accusantium nostrum, iusto delectus ea
                           sunt.
                        </p>
                     </div>
                  </div>
                  <div className="w-full max-w-60 min-h-56 md:min-h-72 h-full flex flex-col gap-4 bg-white dark:bg-gray p-6 shadow-md dark:shadow-md-dark ">
                     <TbTargetArrow className="w-10 h-10" />

                     <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-bold">Lorem Ipsum</h3>
                        <p className="text-sm">
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Harum accusantium nostrum, iusto delectus ea
                           sunt.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="flex flex-col items-center py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10 bg-white dark:bg-gray">
            <div className="container flex flex-col gap-8">
               <h2 className="text-2xl md:text-4xl font-bold text-center">
                  Our Partners
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12"></div>
            </div>
         </section>

         <section className="flex flex-col items-center py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
            <div className="container flex justify-center bg-bubbles dark:bg-gray px-6 py-8 rounded-xl shadow-xl dark:shadow-2xl">
               <div className="max-w-xl flex flex-col items-center gap-9 text-center">
                  <div className="flex flex-col gap-5">
                     <h3 className="text-2xl md:text-4xl font-bold">
                        Subscribe to Our Newsletter
                     </h3>
                     <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum ipsam amet accusantium dolorum nobis velit
                        dignissimos illo et doloremque laudantium.
                     </p>
                  </div>

                  <div className="w-full flex items-center gap-5">
                     <Input
                        type="text"
                        className="dark:bg-mutedGray text-eerieBlack dark:text-white font-medium rounded-md outline-none border-0"
                        placeholder="Enter your email"
                     />
                     <Button className="bg-gray dark:bg-richElectricBlue hover:shadow-lg-dark">
                        Subscribe
                     </Button>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
};

export default About;
