const About = () => {
   return (
      <main className="flex flex-col">
         <section
            className="relative flex justify-center gap-6 py-8 md:py-14 px-5 sm:px-8 lg:px-10"
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

         <section className="flex flex-col items-center gap-10 md:gap-14 bg-cultured dark:bg-gray py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
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
                  "url(https://i.postimg.cc/2jTGnrCZ/istockphoto-1434132794-2048x2048-1.jpg)", // https://i.postimg.cc/G3Nr306k/istockphoto-1261597991-2048x2048-1.jpg
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "top",
               backgroundPositionY: "20%",
            }}
         >
            {/* Blue transparent overlay */}
            <div className="absolute inset-0 bg-richElectricBlue opacity-60" />

            <div className="container flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 z-50">
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
      </main>
   );
};

export default About;
