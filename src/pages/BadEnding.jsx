// @EdgrantHS

import background from "../assets/bad-ending-background.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doorKnock from "../assets/door_knock.mp3";
import ReactAudioPlayer from "react-audio-player";

const BadEnding = () => {
   const [count, setCount] = useState(0);
   const [ipAddress, setIpAddress] = useState(null);
   const [apiData, setApiData] = useState({});
   const [showOutro, setShowOutro] = useState(false);
   const [showIntro, setShowIntro] = useState(true);
   const apiKey = import.meta.env.VITE_API_KEY;
   const rapidAPIKey = import.meta.env.VITE_RAPID_API_KEY;

   const texts = [
      "That's fine,",
      "But remember, there's no escaping from love's grasp",
      "I've made up my mind",
      `${apiData.city == null ? apiData.country : apiData.city} (${
         apiData.latitude
      }, ${apiData.longitude}) huh? I know where you live💕`,
      `I'm on my way to your house this very moment 🤗❤️🔪`,
      "By the way, this is your IP address if you're curious",
   ];

   const getIpAddress = async () => {
      const url =
         "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=" +
         apiKey;
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": rapidAPIKey,
            "X-RapidAPI-Host":
               "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
         },
      };

      try {
         const response = await fetch(url, options);
         const result = await response.json();
         setApiData(result);
         console.log(result);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      getIpAddress();
   }, []);

   const handleIncrement = () => {
      if (count >= texts.length - 2) {
         setIpAddress(apiData.ip);
      }
      if (count >= texts.length - 1) {
         setShowOutro(true);
         return;
      }
      if (count < texts.length - 1) {
         setCount(count + 1);
      }
   };

   return (
      <div className="bg-black w-screen h-screen overflow-hidden">
         <AnimatePresence>
            {showIntro && (
               <motion.div
                  className="absolute flex items-center justify-center h-screen w-screen bg-black z-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, delay: 1 }}
                  onAnimationComplete={() => setShowIntro(false)}
               >
                  <motion.h1
                     className="text-white font-bold text-6xl"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1 }}
                  >
                     {" "}
                     Oh
                  </motion.h1>
               </motion.div>
            )}
         </AnimatePresence>

         <AnimatePresence>
            {!showOutro && !showIntro && (
               <motion.div
                  className="bg-cover bg-center h-screen flex items-center justify-end flex-col z-1"
                  style={{ backgroundImage: `url(${background})` }}
                  onClick={handleIncrement}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, delay: 1 }}
               >
                  {ipAddress && (
                     <motion.h1
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[10vw] z-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                     >
                        {ipAddress}
                     </motion.h1>
                  )}
                  <motion.h1
                     key={texts[count]}
                     className="font-bold text-white text-center text-2xl m-2 md:text-3xl mb-20 z-1"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1 }}
                  >
                     {texts[count]}
                  </motion.h1>
               </motion.div>
            )}
         </AnimatePresence>

         {/* outro */}
         {showOutro && (
            <motion.div
               className="z-20 h-screen w-screen !bg-black flex justify-center items-center"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 2 }}
            >
               <motion.h1
                  className="text-center text-white font-bold text-3xl md:text-4xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3.5 }}
               >
                  <ReactAudioPlayer src={doorKnock} autoPlay volume={1} />
                  don't forget to lock your window sayang 😘
               </motion.h1>
            </motion.div>
         )}
      </div>
   );
};

export default BadEnding;
