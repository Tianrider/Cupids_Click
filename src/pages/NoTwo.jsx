// @Jonathan

import { useState } from "react";
import ChoicesBox from "../components/ChoicesBox";
import TextBox from "../components/TextBox";
import DialogBox from "../components/DialogBox";
import song from "../assets/sad-song.mp3";
import ReactAudioPlayer from "react-audio-player";
import background from "../assets/background-no-two.png";
import chara from "../assets/chara-no-two.png";

function NoTwo() {
   const [count, setCount] = useState(0);
   const [choices, setChoices] = useState(false);

   const texts = ["Guess what?", "You got ME!"];

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

   return (
      <>
         <img
            src={background}
            alt="background"
            className="h-screen w-screen z-[-2] absolute top-0 left-0"
         />
         <img
            src={chara}
            alt="chara"
            className="h-[90vh] md:h-[94vh] absolute bottom-0 z-[-1]"
         />

         {/* fix audio here */}
         <div>
            <ReactAudioPlayer src={song} autoPlay loop />
         </div>

         <div className="h-dvh w-screen items-center justify-start gap-8 flex flex-col-reverse">
            <TextBox texts={texts} count={count} />

            <DialogBox
               handleIncrement={handleIncrement}
               handleDecrement={handleDecrement}
            />

            {choices && (
               <ChoicesBox
                  textYes="Mauu"
                  hrefYes="/good-ending"
                  textNo="IUW NAJIS"
                  hrefNo="/no-three"
               />
            )}
         </div>
      </>
   );
}

export default NoTwo;
