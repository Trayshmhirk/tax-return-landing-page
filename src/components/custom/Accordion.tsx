import { useState } from "react";

type AccordionProps = {
   question: string;
   answer: string | string[];
};

export const Accordion = ({ question, answer }: AccordionProps) => {
   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="accordion">
         <div className="flex flex-col ">
            <h2
               className={`accordion-header flex items-center justify-between ${isOpen ? "bg-lightGray dark:bg-mutedGray" : "bg-white"} dark:bg-gray p-4 rounded-md shadow-md dark:shadow-md-dark transition-colors duration-300 ease-in-out`}
               onClick={handleToggle}
            >
               <button
                  className="font-semibold rounded-md w-full text-left"
                  type="button"
               >
                  {question}
               </button>

               <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition transform duration-300 ease-in-out dark:fill-gray-300 ${
                     isOpen ? "rotate-180" : ""
                  }`}
               >
                  <path
                     d="M5 10L10 5L15 10L13.59 11.41L10 7.84L6.41 11.41L5 10Z"
                     fill="currentColor"
                  />
               </svg>
            </h2>
            <div
               className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-screen" : "max-h-0"
               }`}
            >
               <div className="accordion-body p-4">
                  <div className="flex flex-col gap-2">
                     {Array.isArray(answer) ? (
                        answer.map((ans, index) => <p key={index}>{ans}</p>)
                     ) : (
                        <p className="text-sm md:text-base">{answer}</p>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
