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
         className="fixed top-0 left-0 h-screen w-screen bg-pink-300 flex flex-col gap-5 items-center justify-center"
         initial={{ opacity: 1, scale: 1 }}
         animate={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 3, delay: 3 }}
         style={{ zIndex: zIndex }}
         onAnimationComplete={handleAnimationComplete} //
      >
         <motion.h1
            className="text-6xl text-white twinkle-star-regular"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
         >
            Hi Sayang 😘
         </motion.h1>
         <motion.h1
            className="text-6xl text-white twinkle-star-regular"
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
            <div
               className="relative flex h-screen w-1/2 justify-center align-center items-center flex-col z-1"
               style={{
                  background:
                     "linear-gradient(90deg, rgba(230,46,142,0.5) 10%, rgba(230,46,142,0.5) 50%, rgba(230,46,142,0.4) 80%, rgba(230,46,142,0.3) 90%, rgba(230,46,142,0) 100%)",
               }}
            >
               <p className="text-white p-20 text-xl font-bold font-serif libre-baskerville-bold">
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
                  <span id="libre-baskerville-italic">
                     Will you be my Valentine?
                  </span>
               </p>
               <button
                  type="button"
                  className="text-white border-4 border-white font-bold rounded-full text-2xl px-20 py-4 text-center me-2 mb-2 libre-baskerville-bold transition-all duration-500 hover:bg-pink-400 hover:border-pink-500"
               >
                  Click Me
               </button>
            </div>
            </>
        </>
    );
}

export default MainPage;
