import { TypeAnimation } from "react-type-animation";

const TextBox = (props) => {
   return (
      <div
         className="
          flex flex-col w-[90%] h-[40dvw] py-4 px-5 mb-8 md:w-4/5 md:h-[22dvh] md:px-8
          border-[2px] border-pink-900
          rounded-xl bg-pink-200 bg-opacity-[95%]
          shadow-2xl
        "
      >
         <div className="bg-pink-900 rounded-md flex align-center justify-center absolute bottom-[41dvw] md:bottom-[23dvh] z-1">
            <h1 className="text-2xl quicksand-bold text-center px-9 py-[10px] text-white">
               Christoff Vinago
            </h1>
         </div>
         <p className="text-[4dvw] md:text-2xl quicksand text-pink-900 my-4">
            <TypeAnimation
               key={props.count}
               sequence={["", 100, props.texts[props.count]]}
               wrapper="span"
               speed={90}
               cursor={false}
            />
         </p>
      </div>
   );
};

export default TextBox;
