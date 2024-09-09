import { Button } from "@/components/ui/button";

const Home = () => {
   return (
      <div className="flex flex-col">
         <div className="hero flex justify-center gap-6 bg-antiFlashWhite dark:bg-darkGray py-8 md:py-14 px-5 sm:px-8 lg:px-10">
            <div className="container flex flex-col md:flex-row items-center gap-8">
               {/* Text section */}
               <div className="w-full md:w-[40%] xl:w-1/3 flex flex-col gap-5 md:gap-8 text-center md:text-left">
                  <div className="flex flex-col gap-4">
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-richElectricBlue tracking-wide">
                        YOUR BEST <br /> TAX APP <br /> SOLUTIONS
                     </h1>
                     <p className="max-w-96 md:max-w-full self-center md:self-start font-medium">
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
                           className="absolute top-[2%] left-[11%] w-[78%] h-[72%] xs:h-[79%] sm:h-[87%] object-fill z-0 dark:hidden"
                        />
                        {/* Dark mode Desktop web app image (inside the MacBook screen) */}
                        <img
                           src="https://i.postimg.cc/zvLXZBd9/c8bc7e1b-4c3e-4f7e-bb88-a3a6c796f1e3.png"
                           alt="desktop web app image"
                           className="absolute top-[2%] left-[11%] w-[78%] h-[72%] xs:h-[79%] sm:h-[87%] object-fill z-0 hidden dark:block"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* body */}
         <div className="">body</div>
      </div>
   );
};

export default Home;
