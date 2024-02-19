import { useRef, useEffect, useState } from "react";
import liveBackground from "../assets/main-page-background.mp4";
import { delay, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import soundTrack from "../assets/mainPage-soundtrack.mp3";
import { MdMusicOff, MdMusicNote } from "react-icons/md";
import logo from "../assets/icon.png";

function IntroPage(props) {
   return (
      <motion.div
         className="fixed top-0 left-0 h-screen w-screen bg-gradient-to-tr from-pink-300 to-pink-400 flex flex-col gap-10 md:gap-5 items-center justify-center z-0"
         initial={{ opacity: 1, scale: 1 }}
         transition={{ duration: 5, delay: 5 }}
         onAnimationComplete={props.handleAnimationComplete()}
      >
         <TypeAnimation
            sequence={["", 400, "Hi Sayang,"]}
            wrapper="span"
            speed={10}
            style={{ fontWeight: "bold" }}
            cursor={false}
            className="text-5xl text-white twinkle-star-regular md:text-6xl"
         />
         <TypeAnimation
            sequence={["", 2000, "💕Website ini Untuk Kamu💕"]}
            wrapper="span"
            speed={15}
            style={{ fontWeight: "bold" }}
            cursor={false}
            className="text-[6vw] md:text-5xl text-white twinkle-star-regular"
         />
      </motion.div>
   );
}

function MainPage() {
   const videoRef = useRef(null);
   const audioRef = useRef(null);
   const [audioPlaying, setAudioPlaying] = useState(false);
   const [opacity, setOpacity] = useState(0);

   const handlePlayAudio = () => {
      if (audioPlaying) {
         audioRef.current.pause();
      } else {
         audioRef.current.play();
      }
      setAudioPlaying(!audioPlaying);
   };

   useEffect(() => {
      if (videoRef.current) {
         videoRef.current.playbackRate = 0.4;
      }
   }, []);

   const handleAnimationComplete = () => {
      useEffect(() => {
         const timeout = setTimeout(() => {
            setOpacity(1);
         }, 5000);
      }, []);
   };

   return (
      <>
         <IntroPage handleAnimationComplete={handleAnimationComplete}/>
         <audio ref={audioRef} src={soundTrack} loop />

         <div
            onClick={handlePlayAudio}
            className="w-10 h-10 absolute text-pink-600 z-10 bottom-4 right-4 md:bottom-[4dvh] md:right-[7dvh] cursor-pointer md:hover:scale-110 transition-all duration-500"
            style={{
               filter: "drop-shadow(0 0 20px #ff00ff)",
            }}
         >
            {audioPlaying ? (
               <MdMusicNote size={40} />
            ) : (
               <MdMusicOff size={40} />
            )}
         </div>

         <div 
            style={{
               opacity: opacity,
               transition: "opacity 2s",
            }}
         >
            <video
               autoPlay
               loop
               muted
               className="h-screen w-screen object-cover -z-1 absolute"
               ref={videoRef}
            >
               <source src={liveBackground} type="video/mp4" />
            </video>
            <div className="gradient-background relative flex h-screen w-dvw max-md:text-center md:w-1/2 justify-center align-center items-center flex-col">
               <img
                  src={logo}
                  className="w-28 h-28 md:w-40 md:h-40 hidden md:block"
               ></img>
               <p className="text-white p-10 max-md:py-8 max-md:text-lg text-xl font-bold font-serif libre-baskerville-bold">
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
                  className="text-white border-4 border-white font-bold bg-pink-300/50 rounded-full text-2xl px-20 py-4 text-center me-2 mb-2 libre-baskerville-bold transition-all duration-500 hover:bg-pink-400 hover:border-pink-500 shadow-lg hover:shadow-xl hover:scale-110 "
                  href="/no-one"
               >
                  Click Me
               </a>
            </div>
         </div>
      </>
   );
}

export default MainPage;
