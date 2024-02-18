// @Jonathan

import { useState } from "react";
import ChoicesBox from "../components/ChoicesBox";
import TextBox from "../components/TextBox";
import DialogBox from "../components/DialogBox";
import song from "../assets/sad-song.mp3";
import ReactAudioPlayer from "react-audio-player";
import background from "../assets/background-no-two.png";
import chara from "../assets/chara-no-two.png";
import charaB from "../assets/chara-no-two-b.png";
import memes from "../assets/memes.png";
import { motion } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";

function NoTwo() {
   const [count, setCount] = useState(0);
   const [choices, setChoices] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   const texts = [
      "Guess what?",
      "You got ME!",
      "Lo pikir gw akan mundur gitu aja??",
      "I will create a playlist of songs that remind me of you, updating it every week, so you always know what's in my heart.",
      "Wasn't that romantic? So please be mine!",
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
      if (count <= texts.length - 1) {
         setChoices(false);
      }
      if (count > 0) {
         setCount(count - 1);
      }
   };

   return (
      <>
         {/* fix audio here */}
         <ReactAudioPlayer src={song} autoPlay loop volume={0.8} />

         {isLoading && <LoadingScreen />}

         <img
            src={background}
            alt="background"
            className="h-dvh object-cover md:w-screen z-[-2] absolute top-0 left-0"
            onLoad={() => setIsLoading(false)}
         />
         <motion.img
            src={count >= 3 ? charaB : chara}
            alt="chara"
            className="h-[60vh] md:h-[94vh] md:right-[75vh] absolute bottom-44 md:bottom-16 z-[-1]"
            key={count}
            animate={{ transform: "translateY(3vw)" }}
            transition={{ duration: 0.2 }}
         />

         {count == 1 && !choices && (
            <img
               src={memes}
               alt="memes"
               className="h-[40vh] md:h-[60vh] absolute md:bottom-48 md:right-32 z-[-1]"
            />
         )}

         <div className="h-dvh w-screen items-center justify-start gap-8 flex flex-col-reverse">
            <TextBox texts={texts} count={count} />

            <DialogBox
               handleIncrement={handleIncrement}
               handleDecrement={handleDecrement}
            />
            {choices && (
               <ChoicesBox
                  textYes="eh ya Allah kasian, iyaa dehh"
                  textNo="jamet."
                  hrefNo="/no-three"
               />
            )}
         </div>
      </>
   );
}

export default NoTwo;
