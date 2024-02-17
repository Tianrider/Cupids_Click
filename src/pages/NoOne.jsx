import { useState } from "react";
import TextBox from "../components/TextBox";
import DialogBox from "../components/DialogBox";
import background from "../assets/background-no-one.png";
import chara1Image from "../assets/chara-no-one.png";
import chara1ImageB from "../assets/chara-no-one-b.png";
import chara2Image from "../assets/chara-no-three.png";
import tutorialVideo from "../assets/tutorial-video.gif";
import { motion } from "framer-motion";

const NoOne = () => {
   const [count, setCount] = useState(0);
   const [choices, setChoices] = useState(false);
   const [showTutorialVideo, setShowTutorialVideo] = useState(false);
   const [chara2Visible, setChara2Visible] = useState(false);
   const [chara1Visible, setChara1Visible] = useState(true);

   const texts1 = [
      "Hi :)",
      "Dengerin yaa",
      "Oh my honey",
      "I'll memorize every detail of your happiness, ",
      "so I can be the only one who knows exactly how to bring a smile to your face, every single time.",
      "Take a leap of faith.",
      "Will you accept my feelings?",
   ];

   const texts2 = [
      "Etss, mau mencet no ya?",
      "Sebelum itu, gw ada pertanyaan",
      "Lo mau 10 juta ga?",
      "NAH!!",
      "Jadi gini ya tutorial cara mencet tombol yes~~",
      "Lets try again shall we?",
   ];

   const handleIncrement = () => {
      if (showTutorialVideo) {
         if (count >= texts2.length - 1) {
            setShowTutorialVideo(true);
         } else {
            setCount(count + 1);
         }
      } else {
         if (count >= texts1.length - 1) {
            setChoices(true);
         } else {
            setCount(count + 1);
         }
      }
   };

   const handleDecrement = () => {
      if (count <= 0) {
         return;
      }
      if (texts1[count] === texts2) {
         return;
      }
      setCount(count - 1);
   };

   const handleTutorialVideo = () => {
      setChoices(false);
      setChara1Visible(false);
      setChara2Visible(true);
      setCount(0);
      setShowTutorialVideo(true);
   };

   return (
      <>
         {showTutorialVideo ? (
            <div className="w-auto md:h-1/2 absolute z-0 left-1/2 top-[60dvw] md:top-[40dvh] transform -translate-x-1/2 -translate-y-1/2">
               {count === 4 && (
                  <img
                     src={tutorialVideo}
                     alt="tutorial video"
                     className="max-w-[60vw] max-h-[60vw] md:mb-0 md:max-w-80 md:max-h-80 w-auto h-auto rounded-2xl border-4 border-pink-600"
                     style={{
                        boxShadow:
                           "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
                     }}
                  />
               )}
               {count === 5 && (
                  <div className="mx-auto max-w-lg p-4">
                     <div className="py-2 px-4 mb-2 rounded-xl bg-gradient-to-bl from-pink-300/80 to-pink-400/80 outline-pink-600/80 outline-offset-4 outline outline-4 text-white">
                        <div>
                           <h1 className="text-lg font-bold">Jawabanmu?</h1>
                           <hr className="-mx-4 mt-2 mb-2" />
                           <div className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                              <a
                                 href="/good-ending"
                                 className="block w-full h-full text-center" // Set the anchor tag to be block-level and cover the entire parent div
                              >
                                 Yes
                              </a>
                           </div>
                           <div className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                              <a
                                 href="/no-two"
                                 className="block w-full h-full text-center" // Set the anchor tag to be block-level and cover the entire parent div
                              >
                                 Tetep Enggak!!
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         ) : (
            <></>
         )}
         <img
            src={background}
            alt="background"
            className="h-dvh object-cover md:w-screen z-[-2] absolute top-0 left-0"
         />
         {chara1Visible && (
            <motion.img
               src={count >= 2 ? chara1ImageB : chara1Image}
               alt="chara"
               className={
                  count >= 2 && !chara2Visible
                     ? "h-[50vh] md:h-[90vh] absolute bottom-[20vh] md:bottom-0 md:right-[20vw] z-[-1]"
                     : "h-[85vh] md:h-[94vh] absolute bottom-0 md:right-[57vw] z-[-1]"
               }
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1 }}
            />
         )}

         {chara2Visible && (
            <img
               src={chara2Image}
               alt="chara"
               className="h-[85vh] md:h-[94vh] absolute bottom-0 md:right-[57vw] z-[-1]"
            />
         )}

         <motion.div
            className="h-dvh w-screen items-center justify-start gap-8 flex flex-col-reverse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
         >
            <TextBox
               texts={showTutorialVideo ? texts2 : texts1}
               count={count}
            />

            <DialogBox
               handleIncrement={handleIncrement}
               handleDecrement={handleDecrement}
               style={{ zIndex: 10 }}
            />
            {!showTutorialVideo && choices && (
               <div className="flex justify-end m-10">
                  <div className="flex flex-col items-end py-2 px-4 mb-2 rounded-xl bg-gradient-to-bl from-pink-300/100 to-pink-400/80 outline-pink-600/80 outline-offset-4 outline outline-4 text-white">
                     <div>
                        <h1 className="text-lg font-bold">Jawabanmu?</h1>
                        <hr className="-mx-4 mt-2 mb-2" />
                        <div className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                           <a
                              href="/good-ending"
                              className="block w-full h-full text-center" // Set the anchor tag to be block-level and cover the entire parent div
                           >
                              Yes
                           </a>
                        </div>
                        <div className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                           <a
                              onClick={handleTutorialVideo} // Change handleBlueScreen to handleTutorialVideo
                              className="block w-full h-full text-center" // Set the anchor tag to be block-level and cover the entire parent div
                           >
                              No
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </motion.div>
      </>
   );
};

export default NoOne;
