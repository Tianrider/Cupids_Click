const TextBox = (props) => {
   return (
      <div
         className="
          flex flex-col w-4/5 h-32 py-4 px-8 mb-4 
          rounded-xl bg-gradient-to-tr from-pink-300/80 to-pink-400/80
          outline-pink-600/80 outline-offset-4 outline outline-4
          text-white
          shadow-xl
        "
      >
         <h1 className="text-xl font-bold">Cristian Hadiwijaya</h1>
         <hr className="-mx-4 mt-2 mb-1" />
         <p>{props.texts[props.count]}</p>
      </div>
   );
};

export default TextBox;
