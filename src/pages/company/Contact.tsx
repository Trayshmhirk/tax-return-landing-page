import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Map from "@/components/contact/Map";
import { ContactIcon, MailOpen, MapPinHouse } from "lucide-react";

const Contact = () => {
   return (
      <main className="flex flex-col">
         <section
            className="relative flex justify-center gap-6 py-8 md:py-14 px-5 sm:px-8 lg:px-10"
            style={{
               backgroundImage:
                  "url(https://i.postimg.cc/XvRd0VVb/contact-us-bg-image.jpg)",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "top",
               backgroundPositionY: "40%",
            }}
         >
            {/* Blue transparent overlay */}
            <div className="absolute inset-0 bg-richElectricBlue opacity-40" />

            <div className="container min-h-80 flex flex-col items-center justify-center gap-4 text-center z-50">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
                  Contact Us
               </h1>
               <p className="max-w-2xl text-sm lg:text-base font-medium text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente sint quisquam quam nostrum, nihil et soluta!
               </p>
            </div>
         </section>

         <section className="flex flex-col items-center gap-10 md:gap-14 py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
            <div className="container flex flex-col gap-7">
               <div className="flex flex-col gap-2">
                  <h2 className="text-lg lg:text-3xl font-bold">
                     Get In Touch
                  </h2>
                  <p className="max-w-lg text-sm font-medium">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Sapiente sint quisquam quam nostrum, nihil et soluta!
                  </p>
               </div>
               <div className="grid md:grid-cols-[2fr_1fr] gap-7 lg:gap-16">
                  <form
                     action=""
                     className="w-full h-full flex flex-col justify-between gap-4"
                  >
                     <div className="flex flex-col md:flex-row gap-4">
                        <Input
                           type="text"
                           className="dark:bg-mutedGray dark:text-white rounded-md outline-none"
                           placeholder="Name"
                        />
                        <Input
                           type="text"
                           className="dark:bg-mutedGray dark:text-white rounded-md outline-none"
                           placeholder="Phone"
                        />
                     </div>
                     <Input
                        type="email"
                        className="dark:bg-mutedGray dark:text-white rounded-md outline-none"
                        placeholder="Email"
                     />
                     <Textarea
                        className="dark:bg-mutedGray dark:text-white rounded-md outline-none"
                        placeholder="Message"
                     />
                     <Button className="lg:max-w-44 bg-gray">Send</Button>
                  </form>

                  <div className="w-full flex flex-col gap-6 bg-richElectricBlue px-6 py-8 rounded-xl">
                     <div className="flex flex-col gap-2">
                        <p className="text-base md:text-2xl font-bold text-white">
                           Our newsletter
                        </p>
                        <span className="text-white text-sm">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Earum ipsam amet accusantium dolorum nobis
                           velit dignissimos illo et doloremque laudantium.
                        </span>
                     </div>

                     <div className="flex flex-col gap-3">
                        <Input
                           type="text"
                           className="text-eerieBlack dark:bg-white rounded-md outline-none border-0"
                           placeholder="Enter your email"
                        />
                        <Button className="bg-gray hover:shadow-lg-dark">
                           Subscribe
                        </Button>
                     </div>
                  </div>
               </div>
            </div>

            <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
               <div className="flex flex-col gap-5 bg-darkRichElectricBlue text-white px-6 py-8 rounded-xl">
                  <h2 className="flex items-center gap-2 lg:text-lg font-bold">
                     <ContactIcon />
                     (+234) 80 5571 2758
                  </h2>
                  <p className="max-w-sm text-sm font-medium">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Sapiente sint quisquam quam nostrum, nihil et soluta!
                  </p>
               </div>
               <div className="flex flex-col gap-5 bg-richElectricBlue text-white px-6 py-8 rounded-xl">
                  <h2 className="flex items-center gap-2 lg:text-lg font-bold">
                     <MailOpen />
                     mail@taxreturns.com
                  </h2>
                  <p className="max-w-sm text-sm font-medium">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Sapiente sint quisquam quam nostrum, nihil et soluta!
                  </p>
               </div>
               <div className="flex flex-col gap-5 bg-bubbles dark:text-eerieBlack px-6 py-8 rounded-xl">
                  <h2 className="flex items-center gap-2 lg:text-lg font-bold">
                     <MapPinHouse />
                     Lagos, Nigeria.
                  </h2>
                  <p className="max-w-sm text-sm font-medium">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Sapiente sint quisquam quam nostrum, nihil et soluta!
                  </p>
               </div>
            </div>

            <div className="container flex">
               <div
                  id="map"
                  style={{ height: "400px", width: "100%" }}
                  className="rounded-2xl overflow-hidden"
               >
                  <Map />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Contact;
