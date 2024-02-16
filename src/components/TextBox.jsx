const TextBox = (props) => {
   return (
      <div
         className="
          flex flex-col w-[90%] h-44 py-4 px-5 mb-8 md:w-4/5 md:h-32 md:px-8
          rounded-xl bg-gradient-to-tr from-pink-400/100 to-pink-300/90
          outline-pink-600/80 outline-offset-4 outline outline-4
          text-white
          shadow-2xl
        "
      >
         <h1 className="text-xl font-bold">Christoff Vinago</h1>
         <hr className="-mx-4 mt-2 mb-1" />
         <p className="font-bold text-xl">{props.texts[props.count]}</p>
      </div>
   );
};

export default TextBox;
