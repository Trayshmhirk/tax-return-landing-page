import { Button } from "@/components/ui/button";

const Home = () => {
   return (
      <main className="flex flex-col">
         {/* hero */}
         <section
            className="relative flex justify-center gap-6 bg-antiFlashWhite dark:bg-darkGray py-8 md:py-14 px-5 sm:px-8 lg:px-10"
            style={{
               backgroundImage:
                  "url(https://i.postimg.cc/zfpKsQJk/istockphoto-1408404108-1024x1024-transformed.jpg)",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundPositionY: "80%",
            }}
         >
            <div className="absolute inset-0 bg-gray opacity-60" />
            <div className="container flex flex-col md:flex-row items-center gap-8 z-50">
               <div className="w-full md:w-[40%] xl:w-1/3 flex flex-col gap-5 md:gap-8 text-center md:text-left">
                  <div className="flex flex-col gap-4">
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-richElectricBlue tracking-wide">
                        YOUR BEST <br /> TAX APP <br /> SOLUTIONS
                     </h1>
                     <p className="max-w-96 md:max-w-full self-center md:self-start font-medium text-white">
                        Making a mistake on your return can be costly. From
                        missed deductions, or worse, the dreaded IRS audit.
                     </p>
                  </div>
                  <Button className="w-full xs:max-w-48 self-center md:self-start">
                     Get started
                  </Button>
               </div>

               {/* Image section */}
               <div className="w-full md:w-[60%] xl:w-2/3 h-full">
                  <div className=" h-full flex items-center justify-center gap-4">
                     <div className="relative w-full h-fit min-h-64 lg:max-w-xl xl:max-w-2xl">
                        {/* MacBook Image */}
                        <img
                           src="https://i.postimg.cc/59vHCYLC/Pngtree-macbook-pro-16-9011850.png"
                           className="relative w-full h-full object-contain z-20"
                           alt="macbook image"
                        />

                        {/* Light mode Desktop web app image (inside the MacBook screen) */}
                        <img
                           src="https://i.postimg.cc/R0dmt5q3/3ea21503-d952-4bd3-8453-c29194e8be4d.png"
                           alt="desktop web app image"
                           className="absolute top-[2%] left-[10.5%] w-[79%] h-[72%] xs:h-[79%] sm:h-[87%] object-fill z-0 dark:hidden"
                        />
                        {/* Dark mode Desktop web app image (inside the MacBook screen) */}
                        <img
                           src="https://i.postimg.cc/zvLXZBd9/c8bc7e1b-4c3e-4f7e-bb88-a3a6c796f1e3.png"
                           alt="desktop web app image"
                           className="absolute top-[2%] left-[10.5%] w-[79%] h-[72%] xs:h-[79%] sm:h-[87%] object-fill z-0 hidden dark:block"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* body */}
         <section className="flex flex-col items-center gap-10 md:gap-14 py-8 pb-10 md:py-14 px-5 sm:px-8 lg:px-10">
            <div className="container flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
               <div className="w-full h-full min-w-36 min-h-32 max-w-48 flex flex-col items-center justify-center gap-2 bg-richElectricBlue text-white text-center p-6 md:p-10 rounded-2xl shadow-xl dark:shadow-2xl">
                  <p className="text-2xl md:text-4xl font-bold">1K</p>
                  <span className="text-sm font-medium">HAPPY CUSTOMERS</span>
               </div>
               <div className="w-full h-full min-w-36 min-h-32 max-w-48 flex flex-col items-center justify-center gap-2 bg-richElectricBlue text-white text-center p-6 md:p-10 rounded-2xl shadow-xl dark:shadow-2xl">
                  <p className="text-2xl md:text-4xl font-bold">$1M+</p>
                  <span className="text-sm font-medium">
                     MONTHLY TAX CLEARED
                  </span>
               </div>
               <div className="w-full h-full min-w-36 min-h-32 max-w-48 flex flex-col items-center justify-center gap-2 bg-richElectricBlue text-white text-center p-6 md:p-10 rounded-2xl shadow-xl dark:shadow-2xl">
                  <p className="text-2xl md:text-4xl font-bold">24/7</p>
                  <span className="text-sm font-medium">
                     PROFESSIONAL SUPPORT
                  </span>
               </div>
            </div>

            <div className="container flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-10">
               <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <p className="text-sm md:text-xl font-bold">Advantages</p>
                  <span className="max-w-[300px] sm:max-w-xs text-mutedGray dark:text-chineseWhite text-xs md:text-sm font-medium">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Necessitatibus culpa ex architecto rem.
                  </span>
               </div>
               <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <p className="text-sm md:text-xl font-bold">Benefits</p>
                  <span className="max-w-[300px] sm:max-w-xs text-mutedGray dark:text-chineseWhite text-xs md:text-sm font-medium">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Necessitatibus culpa ex architecto rem.
                  </span>
               </div>
               <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <p className="text-sm md:text-xl font-bold">Profits</p>
                  <span className="max-w-[300px] sm:max-w-xs text-mutedGray dark:text-chineseWhite text-xs md:text-sm font-medium">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Necessitatibus culpa ex architecto rem.
                  </span>
               </div>
            </div>
         </section>

         <section className="flex flex-col items-center gap-10 md:gap-14 py-8 pb-10 md:py-14 px-5 sm:px-8 lg:px-10">
            <div className="container flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
               rest
            </div>
         </section>

         <section className="flex flex-col items-center gap-10 md:gap-14 my-8 mb-10 md:my-14 md:mb-16 mx-5 md:mx-10 xl:mx-20 p-6 md:px-10 md:py-12 bg-bubbles dark:bg-gray rounded-xl shadow-xl dark:shadow-2xl">
            <div className="container flex flex-col-reverse sm:flex-row justify-center items-center gap-6 md:gap-8">
               <div className="w-full flex flex-col gap-3 text-center sm:text-left">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-richElectricBlue">
                     Join thousands <br /> who already trust us
                  </h2>

                  <p className="max-w-sm self-center md:self-start font-medium">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Perferendis corporis distinctio non qui! Eos, saepe!
                  </p>

                  <Button className="w-full sm:max-w-48 self-center sm:self-start mt-3">
                     Get started
                  </Button>
               </div>

               <div className="w-full flex justify-center md:justify-start">
                  <img
                     src="https://i.postimg.cc/ThvDWx76/1408321925-1024x1024-transformed.jpg"
                     alt="image"
                     className="w-full max-w-md md:max-w-lg rounded-xl"
                  />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Home;
