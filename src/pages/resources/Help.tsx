import { Accordion } from "@/components/custom/Accordion";

const Help = () => {
   return (
      <main className="flex flex-col">
         <section
            className="relative flex justify-center gap-6 py-8 md:py-14 px-5 sm:px-8 lg:px-10"
            style={{
               backgroundImage:
                  "url(https://i.postimg.cc/sXmML80F/istockphoto-1806153068-2048x2048-1.jpg)",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "top",
               backgroundPositionY: "45%",
            }}
         >
            {/* Blue transparent overlay */}
            <div className="absolute inset-0 bg-mutedGray opacity-60" />

            <div className="container min-h-64 flex flex-col items-center justify-center gap-4 text-center z-50">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
                  Help and Support
               </h1>
            </div>
         </section>

         <section className="flex flex-col items-center gap-10 md:gap-14 py-8 pb-10 md:py-16 px-5 sm:px-8 lg:px-10">
            <div className="container flex flex-col gap-10">
               <div className="flex flex-col items-center gap-5">
                  <p className="max-w-4xl text-center">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Consequatur nam quidem voluptate ex rem eligendi nobis,
                     atque accusamus, vero pariatur cupiditate laboriosam
                     repudiandae. Provident neque alias id odit placeat, sunt,
                     quis nobis at, odio necessitatibus sapiente tempora culpa
                     pariatur laboriosam quisquam dolorem similique harum?
                     Corporis distinctio ad nihil amet odio aut dignissimos
                     saepe temporibus aspernatur labore quis esse sequi deleniti
                     quas modi id, repellat quasi rerum dolores consectetur quos
                     laboriosam?
                  </p>
               </div>

               <div className="flex flex-col gap-4">
                  <Accordion
                     question="Who Are We?"
                     answer={[
                        "Tailored Financial Solutions for Individuals and Corporations. Empowering Your Financial Success.",
                        "Where Excellence Meets Expertise in Payroll, Tax, and Management Consulting. ",
                     ]}
                  />
                  <Accordion
                     question="Services Tailored for You"
                     answer={[
                        "Attestation Services: Auditing, review, agreed-upon procedures, and assurance services.",
                        "Accounting: General bookkeeping, compilation of financial statements.Payroll Services: Preparation, quarterly tax filing, W2/1099, and federal and state unemployment returns.",
                        "Payroll Services: Preparation, quarterly tax filing, W2/1099, and federal and state unemployment returns.",
                        "Tax Services: Corporate, individual, and not-for-profit organizations.",
                        "Management Consulting: Profit enhancement, employee benefit consulting, and business valuation.",
                     ]}
                  />
                  <Accordion
                     question="Industries We Serve"
                     answer={[
                        "•	Health Care",
                        "•	Government",
                        "•	Not for Profit",
                        "•	Manufacturing",
                        "•	Real Estate/Construction",
                     ]}
                  />
                  <Accordion
                     question="Why Choose Us?"
                     answer={[
                        "Navigating Financial Complexity Made Simple. When you choose Okeh & Associates P.C, you're choosing:",
                        "•	Comprehensive Approach:",
                        "From auditing to payroll and tax services, our holistic approach guarantees that every financial facet is considered, providing optimal and tailored solutions for individuals and businesses alike.",
                        "•	Multidisciplinary Teams: ",
                        "Our teams aren't just knowledgeable; they are specifically tailored to understand and cater to the intricate needs of your organization, providing solutions that align with your goals and challenges.",
                        "•	Experience Matters: ",
                        "Over two decades of expertise in industries like healthcare, government, nonprofits, manufacturing, and real estate ensures you benefit from seasoned professionals who understand your unique challenges.",
                        "•	Guaranteed Satisfaction: ",
                        "As certified public accountants, we guarantee 100% satisfaction. Our commitment to excellence is sealed with a range of services, including IRS tax resolution, payment plans, and audit representation.",
                     ]}
                  />
                  <Accordion
                     question="Hear What Our Clients Say"
                     answer={[
                        "Discover the transformative experiences shared by those who entrusted their financial journey to Okeh & Associates P.C.",
                        `
                           •	I prepared my Taxes with Okeh & Associates and infact i was very satisfied with the service. I managed to correct my past mistakes and ultimately received my returns on time. The CPA's here are very knowledgeable, insightful and thorough. I definitely recommend Okeh & Associates for all your tax and accounting needs.,
                              Laureen Smith,
                              Lanham, MD
                        `,
                        "CLIENTS",
                        "•	U.S. Department of Justice, Immigration & Naturalization Service",
                        "•	National Center for Strategic Nonprofit Planning & Community Leadership",
                        "•	District of Columbia Government, Roots Public Charter School",
                     ]}
                  />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Help;
