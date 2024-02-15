import { useRef, useEffect, useState } from "react";
import liveBackground from "../assets/main-page-background.mp4";
import { motion } from "framer-motion";

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
         transition={{ duration: 3, delay: 3 }}
         style={{ zIndex: zIndex }}
         onAnimationComplete={handleAnimationComplete} //
      >
         <motion.h1
            className="text-5xl text-white twinkle-star-regular md:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
         >
            Hi Sayang 😘
         </motion.h1>
         <motion.h1
            className="text-3xl md:text-6xl text-white twinkle-star-regular"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
         >
            💕Website ini Untuk Kamu💕
         </motion.h1>
      </motion.div>
   );
}

function MainPage() {
   const videoRef = useRef(null);

   useEffect(() => {
      if (videoRef.current) {
         videoRef.current.playbackRate = 0.4;
      }
   }, []);

   return (
      <>
         <IntroPage />
         <>
            <video
               autoPlay
               loop
               muted
               className="h-screen w-screen object-cover -z-1 absolute"
               ref={videoRef} // Attach the ref to the video element
            >
               <source src={liveBackground} type="video/mp4" />
            </video>
            <div className="gradient-background relative flex h-screen w-dvw max-md:text-center md:w-1/2 justify-center align-center items-center flex-col">
               <p className="text-white p-20 max-md:py-8 max-md:text-lg text-xl font-bold font-serif libre-baskerville-bold">
                  Star shining bright in the night,
                  <br />
                  I'm rewriting my story, holding onto hope tight,
                  <br />
                  I'll wait patiently, even if it's not right,
                  <br />
                  "Hi" and "Bye," just a few fleeting lines,
                  <br />
                  Yet my heart still longs for those moments divine.
                  <br />
                  <br />
                  Embark on this journey of the heart,
                  <br />
                  Where every choice crafts our story's part,
                  <br />
                  I'll pose a question, sincere and true,
                  <br />
                  <br />
                  <span id="libre-baskerville-italic">
                     Will you be my Valentine?
                  </span>
               </p>
               <a
                  type="button"
                  className="text-white border-4 border-white font-bold rounded-full text-2xl px-20 py-4 text-center me-2 mb-2 libre-baskerville-bold transition-all duration-500 hover:bg-pink-400 hover:border-pink-500 shadow-lg hover:shadow-xl hover:scale-110"
                  href="/no-one"
               >
                  Click Me
               </a>
            </div>
         </>
      </>
   );
}

export default MainPage;
