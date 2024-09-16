import { Accordion } from "@/components/custom/Accordion";

const Faq = () => {
   return (
      <main className="flex flex-col">
         <section
            className="relative flex justify-center gap-6 py-8 md:py-14 px-5 sm:px-8 lg:px-10"
            style={{
               backgroundImage:
                  "url(https://i.postimg.cc/hjs1yQ60/istockphoto-1497949064-2048x2048.jpg)", // https://i.postimg.cc/hjc011yj/istockphoto-1497949064-2048x2048-transformed.jpg
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "top",
               backgroundPositionY: "30%",
            }}
         >
            {/* Blue transparent overlay */}
            <div className="absolute inset-0 bg-mutedGray opacity-60" />

            <div className="container min-h-56 flex flex-col items-center justify-center gap-4 text-center z-50">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
                  FAQ
               </h1>
            </div>
         </section>

         <section className="flex flex-col items-center gap-10 md:gap-14 py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
            <div className="container flex flex-col gap-10">
               <div className="flex flex-col items-center gap-5">
                  <h2 className="text-xl md:text-3xl font-bold">
                     Frequently Asked Questions
                  </h2>

                  <p className="max-w-3xl text-center">
                     Welcome to our Frequently Asked Questions (FAQ) section,
                     where you can find answers to some of the most common
                     questions about our services. In this section, you will
                     find the answers to questions about our services as a tax
                     returns organization, and how we can help you sort your tax
                     return issues. If you can't find the answer to your
                     questions here, please feel free to contact us and we'll be
                     happy to assist you.
                  </p>
               </div>

               <div className="flex flex-col gap-7">
                  <div className="flex flex-col gap-5">
                     <h3 className="text-lg md:text-2xl font-bold">Services</h3>
                     <div className="flex flex-col gap-4">
                        <Accordion
                           question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
                           answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis at iure vel facere, ipsam debitis omnis voluptatum eligendi ut praesentium unde molestiae illo tenetur."
                        />
                        <Accordion
                           question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
                           answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis at iure vel facere, ipsam debitis omnis voluptatum eligendi ut praesentium unde molestiae illo tenetur."
                        />
                        <Accordion
                           question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
                           answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis at iure vel facere, ipsam debitis omnis voluptatum eligendi ut praesentium unde molestiae illo tenetur."
                        />
                     </div>
                  </div>

                  <div className="flex flex-col gap-5">
                     <h3 className="text-lg md:text-2xl font-bold">Tax</h3>
                     <div className="flex flex-col gap-4">
                        <Accordion
                           question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
                           answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis at iure vel facere, ipsam debitis omnis voluptatum eligendi ut praesentium unde molestiae illo tenetur."
                        />
                        <Accordion
                           question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
                           answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis at iure vel facere, ipsam debitis omnis voluptatum eligendi ut praesentium unde molestiae illo tenetur."
                        />
                        <Accordion
                           question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
                           answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis at iure vel facere, ipsam debitis omnis voluptatum eligendi ut praesentium unde molestiae illo tenetur."
                        />
                     </div>
                  </div>

                  <div className="flex flex-col gap-5">
                     <h3 className="text-lg md:text-2xl font-bold">Audits</h3>
                     <div className="flex flex-col gap-4">
                        <Accordion
                           question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
                           answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis at iure vel facere, ipsam debitis omnis voluptatum eligendi ut praesentium unde molestiae illo tenetur."
                        />
                        <Accordion
                           question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
                           answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis at iure vel facere, ipsam debitis omnis voluptatum eligendi ut praesentium unde molestiae illo tenetur."
                        />
                        <Accordion
                           question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
                           answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis at iure vel facere, ipsam debitis omnis voluptatum eligendi ut praesentium unde molestiae illo tenetur."
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
};

export default Faq;
