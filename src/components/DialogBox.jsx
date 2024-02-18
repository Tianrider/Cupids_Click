import prevButton from "../assets/button-previous.png";
import nextButton from "../assets/button-next.png";

const DialogBox = (props) => {
   return (
      <div className="flex justify-end w-4/5 absolute gap-3 bottom-[6dvh] right-[11dvw]">
         {/* <div
            className="
            flex flex-row items-end py-2 px-4 mb-2 gap-3
            rounded-xl bg-gradient-to-bl from-pink-300/80 to-pink-400/80
            outline-pink-600/80 outline-offset-4 outline outline-4
            text-white
          "
         > */}
         <img
            src={prevButton}
            className="w-10 h-10 hover:scale-110 transition-all duration-100 hover:bg-pink-300/90 rounded-full"
            onClick={props.handleDecrement}
         ></img>
         <img
            src={nextButton}
            className="w-10 h-10 hover:scale-110 transition-all duration-100 hover:bg-pink-300/90 rounded-full"
            onClick={props.handleIncrement}
         ></img>
         {/* <div
               className="bg-pink-500 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow-2xl py-1 px-3 mt-1 cursor-pointer font-bold"
               onClick={props.handleDecrement}
            >
               {"<- Prev"}
            </div>
            <div
               className="bg-pink-500 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow-2xl py-1 px-3 mt-1 cursor-pointer font-bold"
               onClick={props.handleIncrement}
            >
               {"Next ->"}
            </div> */}
         {/* </div> */}
      </div>
   );
};

export default DialogBox;
