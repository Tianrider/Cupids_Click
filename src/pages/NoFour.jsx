import { useState } from "react";
import TextBox from "../components/TextBox";
import DialogBox from "../components/DialogBox";
import background from "../assets/background-no-four.png";
import chara from "../assets/chara-no-three.png";
import { motion } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";

function NoTwo() {
   const [count, setCount] = useState(0);
   const [choices, setChoices] = useState(false);
   const [noClicked, setNoClicked] = useState(0);
   const animationKey = `${count}-${noClicked}`;
   const [isLoading, setIsLoading] = useState(true);

   const texts = [
      "Panik Ya? hehe 😘",
      "Itu gambaran hatiku kalo lo ga ada kamu... T_T",
      "oke kita coba TERAKHIR yaaa",
      "ehem",
      "Will you let me shadow you in your darkest nights, ensuring you always have light and warmth from my unyielding devotion?",
   ];

   const noTexts = [
      "BISA STOP GA SI?",
      "EHH WAIT",
      "SERIUS NIH?",
      "PLIS??",
      "PLISS😭😭",
   ];

   const yesTexts = [
      "ishh yauda deh iya...",
      "Salah pencet woi!",
      "YANG INI WOI!",
      "FREE MONEY HERE!",
      "CLICK ME!",
   ];

   const handleIncrement = () => {
      if (count >= texts.length - 2) {
         setChoices(true);
      }
      if (!choices && count < texts.length - 1) {
         setCount(count + 1);
      }
   };

   const handleDecrement = () => {
      if (count <= 0 || count >= texts.length - 2) {
         return;
      }
      if (count > 0) {
         setCount(count - 1);
      }
   };

   const handleNoClicked = () => {
      if (noClicked >= 4) {
         window.location.href = "/bad-ending";
         return;
      }
      setNoClicked(noClicked + 1);
   };

   return (
      <>
         {isLoading && <LoadingScreen />}
         <img
            src={background}
            alt="background"
            className="h-dvh object-cover md:w-screen z-[-2] absolute top-0 left-0"
            onLoad={() => setIsLoading(false)}
         />
         <motion.img
            src={chara}
            alt="chara"
            className="h-[80vh] md:h-[94vh] absolute bottom-[1vw] md:right-[57vw] z-[-1]"
            key={animationKey}
            animate={{ transform: "translateY(1vw)" }}
            transition={{ duration: 0.2 }}
         />

         {/* fix audio here */}
         <div className="h-dvh w-screen items-center justify-start gap-8 flex flex-col-reverse overflow-hidden">
            <TextBox texts={texts} count={count} />

            <DialogBox
               handleIncrement={handleIncrement}
               handleDecrement={handleDecrement}
            />

            {choices && (
               <div className="flex justify-end">
                  <div
                     className="
         flex flex-col items-end py-2 px-4 mb-2
         rounded-xl bg-gradient-to-bl from-pink-300/80 to-pink-400/80
         outline-pink-600/80 outline-offset-4 outline outline-4
         text-white
       "
                  >
                     <div>
                        <h1 className="text-lg font-bold">Jawabanmu?</h1>
                        <hr className="-mx-4 mt-2 mb-2" />
                        <div
                           className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer"
                           style={{
                              scale: `${noClicked + 1}`,
                           }}
                        >
                           <a href="/good-ending">{yesTexts[noClicked]}</a>
                        </div>
                        <div
                           className={`mt-1 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 rounded-xl shadow py-1 px-3 cursor-pointer`}
                           onClick={handleNoClicked}
                           style={{
                              transform: `translateY(${noClicked * 40}px)`,
                           }}
                        >
                           <a>{noTexts[noClicked]}</a>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </>
   );
}

export default NoTwo;
