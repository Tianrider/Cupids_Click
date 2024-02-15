// @Tianrider

import { useState } from "react";
import TextBox from "../components/TextBox";
import DialogBox from "../components/DialogBox";
import background from "../assets/background-no-three.png";
import chara from "../assets/chara-no-three.png";
import sadFace from "../assets/sad-face.png";

const NoThree = () => {
   const [count, setCount] = useState(0);
   const [choices, setChoices] = useState(false);
   const [showBlueScreen, setShowBlueScreen] = useState(false);

   const texts = [
      "Let’s try a riddle this time.",
      "What did the iPhone say to the Macbook?",
      "You are the apple of my eye!",
      "Awikwok gw cowo humoris banget si 👉👈",
      "SEKARANG",
      "JADIAN!",
   ];

   const handleIncrement = () => {
      if (count >= texts.length - 1) {
         setChoices(true);
      }
      if (!choices && count < texts.length - 1) {
         setCount(count + 1);
      }
   };

   const handleDecrement = () => {
      if (count <= 0) {
         return;
      }
      if (count > 0) {
         setCount(count - 1);
      }
   };

   const handleBlueScreen = () => {
      setShowBlueScreen(true);
   };

   return (
      <>
         {showBlueScreen && (
            <div className="h-screen w-screen bg-blue-800 absolute z-2 flex justify-center">
               <a
                  href="/bad-ending"
                  className="justify-center flex align-center"
               >
                  <div className="flex justify-center align-center flex-col m-[11vw] gap-10">
                     <img src={sadFace} className="w-10 md:w-20"></img>
                     <p className="text-white text-[1.3rem] md:text-[2.8rem]">
                        Whoops.. it seems like something has broken.
                        Your PC ran into a problem and needs to be fixed
                        by one solution:{" "}
                        <span className="font-bold">
                           {"CHOOSE ME! >:("}
                        </span>
                     </p>
                  </div>
               </a>
            </div>
         )}
         <img
            src={background}
            alt="background"
            className="h-screen w-screen z-[-2] absolute top-0 left-0"
         />
         <img
            src={chara}
            alt="chara"
            className="h-[90vh] md:h-[94vh] absolute bottom-0 md:right-[57vw] z-[-1]"
         />
         <div className="h-dvh w-screen items-center justify-start gap-8 flex flex-col-reverse">
            <TextBox texts={texts} count={count} />

            <DialogBox
               handleIncrement={handleIncrement}
               handleDecrement={handleDecrement}
            />
            {choices && (
               <div className="flex justify-end m-10">
                  <div
                     className="
                                            flex flex-col items-end py-2 px-4 mb-2
                                            rounded-xl bg-gradient-to-bl from-pink-300/80 to-pink-400/80
                                            outline-pink-600/80 outline-offset-4 outline outline-4
                                            text-white
                                          "
                  >
                     <div>
                        <h1 className="text-lg font-bold">
                           Jawabanmu?
                        </h1>
                        <hr className="-mx-4 mt-2 mb-2" />
                                <div className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                                    <a href="/good-ending">
                                        {
                                            "ihh kamu humoris banget, iya iyaa aku sukaa <3"
                                        }
                                    </a>
                                </div>
                                <div className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                                    <button onClick={handleBlueScreen}>
                                        apasi blok
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default NoThree;
