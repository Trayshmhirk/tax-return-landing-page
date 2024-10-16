const Privacy = () => {
   return (
      <main className="flex flex-col">
         <section
            className="relative flex justify-center gap-6 py-8 md:py-14 px-5 sm:px-8 lg:px-10"
            style={{
               backgroundImage:
                  "url(https://i.postimg.cc/sDsPCvNT/istockphoto-1221519717-2048x2048-1.jpg)", // https://i.postimg.cc/7YZPZM22/istockphoto-1397234860-2048x2048-1.jpg
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundPositionY: "center",
            }}
         >
            {/* Blue transparent overlay */}
            <div className="absolute inset-0 bg-gray opacity-70" />

            <div className="container min-h-64 flex flex-col items-center justify-center gap-4 text-center z-50">
               <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
                  Privacy Policy
               </h1>
            </div>
         </section>

         <section className="flex flex-col items-center py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
            <div className="container flex flex-col gap-6">
               <div className="flex flex-col gap-4">
                  <h2 className="text-lg md:text-xl font-bold">Introduction</h2>

                  <p>
                     Welcome to Tax Returns Privacy Policy. We value your
                     privacy and are committed to protecting your personal
                     information while using our tax return services.
                  </p>
               </div>

               <div className="flex flex-col gap-4">
                  <h2 className="text-lg md:text-xl font-bold">
                     Information We Collect
                  </h2>

                  <div className="flex flex-col gap-3">
                     <p>We may collect the following types of information:</p>
                     <ul className="list-disc pl-5">
                        <li>
                           Personal Information (Name, Email, Phone number)
                        </li>
                        <li>
                           Tax-related Information (Income, Deductions, Filing
                           Status)
                        </li>
                        <li>
                           Usage Data (IP address, browser type, pages visited)
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="flex flex-col gap-4">
                  <h2 className="text-lg md:text-xl font-bold">
                     How We Use Your Information
                  </h2>

                  <div className="flex flex-col gap-3">
                     <p>We use your information to:</p>
                     <ul className="list-disc pl-5">
                        <li>Provide and maintain our tax return services</li>
                        <li>Process your tax returns</li>
                        <li>
                           Communicate with you regarding your account or
                           support
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="flex flex-col gap-4">
                  <h2 className="text-lg md:text-xl font-bold">
                     Data Security
                  </h2>
                  <p>
                     We take the security of your personal information seriously
                     and employ various measures to protect it from unauthorized
                     access, alteration, or disclosure.
                  </p>
               </div>

               <div className="flex flex-col gap-4">
                  <h2 className="text-lg md:text-xl font-bold">
                     Sharing of Data
                  </h2>
                  <p>
                     We do not share your personal information with third
                     parties except as necessary to complete your tax return or
                     as required by law.
                  </p>
               </div>

               <div className="flex flex-col gap-4">
                  <h2 className="text-lg md:text-xl font-bold">Your Rights</h2>
                  <p>
                     You have the right to access, update, or delete your
                     personal data. To exercise these rights, please contact us
                     at @taxreturns.com.
                  </p>
               </div>

               <div className="flex flex-col gap-4">
                  <h2 className="text-lg md:text-xl font-bold">
                     Changes to This Policy
                  </h2>
                  <p>
                     We may update this Privacy Policy from time to time. We
                     will notify you of any changes by posting the new policy on
                     our website.
                  </p>
               </div>

               <div className="flex flex-col gap-4">
                  <h2 className="text-lg md:text-xl font-bold">Contact Us</h2>
                  <p>
                     If you have any questions about this Privacy Policy, please
                     contact us at @taxreturns.com.
                  </p>
               </div>
            </div>
         </section>
      </main>
   );
};

export default Privacy;
