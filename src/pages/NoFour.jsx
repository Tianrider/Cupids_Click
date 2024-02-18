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
      "Engga Dulu",
      "GAK 😡!!",
      "Download Virus.exe",
      "Pliss😭😭",
   ];

   const yesTexts = [
      "ishh yauda deh iya...",
      "Pencet yang ini Woi!",
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
      if (count <= texts.length - 1) {
         setChoices(false);
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
               <div className="mx-10 my-[10dvh] md:my-[20dvh]">
                  <div
                     className=" text-pink-900 quicksand-bold shadow py-1 px-4 mt-1 md:py-4 cursor-pointer text-center
                        border-[2px] border-pink-900
                        rounded-xl bg-pink-200 bg-opacity-[95%]
                        hover:bg-pink-900 hover:text-white hover:scale-105 transition-all duration-200"
                     style={{
                        scale: `${noClicked + 1}`,
                     }}
                  >
                     <a href="/good-ending">{yesTexts[noClicked]}</a>
                  </div>
                  <div
                     className=" text-pink-900 quicksand-bold shadow py-1 px-4 mt-1 md:py-4 cursor-pointer text-center
                           border-[2px] border-pink-900
                           rounded-xl bg-pink-200 bg-opacity-[95%]
                           hover:bg-pink-900 hover:text-white hover:scale-105 transition-all duration-200"
                     onClick={handleNoClicked}
                     style={{
                        transform: `translateY(${noClicked * 10}dvh)`,
                     }}
                  >
                     <a>{noTexts[noClicked]}</a>
                  </div>
               </div>
            )}
         </div>
      </>
   );
}

export default NoTwo;
