import { TypeAnimation } from "react-type-animation";
import Couple from "../assets/couple1.png";
import sakuraBg from "../assets/sakura-tree-hill.png";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import soundTrack from "../assets/mainPage-soundtrack.mp3";

function IntroPage() {
   const [zIndex, setZIndex] = useState(10);

   const handleAnimationComplete = () => {
      setZIndex(0);
   };

   return (
      <motion.div
         className="fixed top-0 left-0 h-screen w-screen bg-pink-300 flex flex-col gap-10 md:gap-5 items-center justify-center"
         initial={{ opacity: 1, scale: 1 }}
         animate={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 2, delay: 2.5 }}
         style={{ zIndex: zIndex }}
         onAnimationComplete={handleAnimationComplete} //
      >
         <motion.h1
            className="text-5xl text-white twinkle-star-regular md:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
         >
            👉👈
         </motion.h1>
      </motion.div>
   );
}

function GoodEnding() {
   const audioRef = useRef(null);

   return (
      <>
         <audio ref={audioRef} src={soundTrack} loop autoPlay />

         <IntroPage />
         <div
            className="h-[100vh] w-screen flex flex-wrap flex-1 justify-center items-center overflow-x-hidden"
            style={{
               backgroundImage: `url(${sakuraBg})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               position: "relative",
            }}
         >
            <div
               className=""
               style={{ background: "rgba(255, 255, 255, 0.3)" }}
            ></div>
            <div className="relative flex flex-col md:flex-row justify-center items-center">
               <div className="w-1/2 h-auto flex justify-center">
                  <div className="w-[32rem] h-screen relative">
                     <div
                        className=" up-arrow
                     w-10 h-10 absolute bottom-56 left-[27vw] md:opacity-0
                     border-t-8 border-l-8 border-pink-600 rounded rotate-45
                     "
                     ></div>
                     <img
                        src={Couple}
                        alt="CoupleInLove"
                        className="absolute bottom-0 overflow-auto"
                     />
                  </div>
               </div>
               <div className="w-1/2 mr-4 md:mr-16 h-auto mb-10 md:mb-0 bg-pink-200 bg-opacity-80 bg-flex border-4 shadow-xl border-pink-700 items-center rounded-2xl">
                  <div className="p-3">
                     <p className="font-serif italic text-center bg-gradient-to-r">
                        <TypeAnimation
                           sequence={["", 3500, "My Bravest Confession"]}
                           wrapper="span"
                           speed={5}
                           style={{ fontSize: "2rem", color: "indigo" }}
                        />
                     </p>
                     <h1 className="font-Cormorant font-bold pt-5 text-2xl text-pink-800">
                        Dear Dayu Aventail,{" "}
                     </h1>
                     <p className="font-Cormorant font-bold text-pink-800">
                        YOU FILL MY HEART WITH JOY 💖
                        <br />
                        We&apos;re now officially partners in Valentine&apos;s
                        adventures! :o
                        <br />
                        <br />
                        This is officially my best day because you&apos;re
                        choosing me! In return, I promise to fill your days with
                        endless joy and to cherish every moment we share,
                        ensuring you never have a reason to doubt your choice.
                        <br /> <br />
                        Are you ready to start the amazing journey ahead of us
                        together with me? Let&apos;s create unforgettable
                        memories and share our days filled with affection and
                        delightful surprises! All&apos;s well that ends well to
                        end up with you 💝
                        <br /> <br />
                     </p>
                     <p className="italic font-Cormorant font-bold text-pink-800">
                        “Love&apos;s script ends with us together, a perfect
                        ending to a beautiful beginning”
                        <br />
                        <br />
                     </p>
                     <p className="font-Cormorant font-bold text-pink-800">
                        Sincerely yours, Vinago💐
                     </p>
                     <div className="pt-4 flex items-end justify-end">
                        <button
                           type="button"
                           onClick={() =>
                              (location.href = "https://emas2.ui.ac.id/")
                           }
                           className="text-white border-4 bg-pink-300/50 border-white font-bold rounded-2xl text-2xl px-12 py-2 text-center me-2 mb-2 libre-baskerville-bold transition-all duration-500 hover:bg-pink-400 hover:border-pink-500 shadow-lg hover:shadow-xl hover:scale-110 overflow-auto"
                        >
                           {" "}
                           Main Page{" "}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default GoodEnding;
