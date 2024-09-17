const Terms = () => {
   return (
      <main className="flex flex-col">
         <section
            className="relative flex justify-center gap-6 py-8 md:py-14 px-5 sm:px-8 lg:px-10"
            style={{
               backgroundImage:
                  "url(https://i.postimg.cc/ryQt80BW/terms-image.jpg)", //
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundPositionY: "center",
            }}
         >
            {/* Blue transparent overlay */}
            <div className="absolute inset-0 bg-gray opacity-60" />

            <div className="container min-h-56 flex flex-col items-center justify-center gap-4 text-center z-50">
               <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
                  Terms & Conditions
               </h1>
            </div>
         </section>

         <section className="flex flex-col items-center gap-10 md:gap-14 py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
            <div className="container flex flex-col gap-10">f</div>
         </section>
      </main>
   );
};

export default Terms;
