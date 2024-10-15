import { PiChartLineUpBold } from "react-icons/pi";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { useState } from "react";

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
            <div className="container flex flex-col gap-10">
               <h2 className="text-xl md:text-3xl font-bold text-center">
                  About Us
               </h2>

               <div className="flex flex-col sm:flex-row gap-5 lg:gap-12">
                  <div className="w-full flex flex-col gap-3">
                     <p className="text-sm md:text-base font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     </p>
                     <p className="max-w-md text-mutedGray dark:text-chineseWhite text-xs md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci dignissimos odit, iusto praesentium sequi rem
                        ullam velit sunt, fuga soluta reiciendis atque quia
                        accusantium eius. Rerum dolorem suscipit id, rem
                        exercitationem autem qui voluptas dolore quidem iste
                        corporis natus veniam pariatur tempore animi. Magnam
                        molestias in, eaque nisi sit quia quae quo, aliquam
                        atque maxime fugit id nihil autem adipisci veniam optio
                        fuga! Animi, accusamus! Dolores assumenda accusamus
                        consectetur non, iusto dolorum vel adipisci nesciunt
                        repudiandae nisi cumque impedit nobis asperiores esse
                        placeat iure sit reprehenderit ullam totam ipsam neque
                        magni in? Expedita nemo amet corporis nobis dicta
                        dignissimos vitae!
                     </p>
                  </div>
                  <div className="w-full h-full flex flex-col gap-4">lorem</div>
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
               <h2 className="text-xl md:text-3xl font-bold text-center">
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
                        className="relative w-full h-56 flex cursor-pointer"
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
      </main>
   );
};

export default About;
