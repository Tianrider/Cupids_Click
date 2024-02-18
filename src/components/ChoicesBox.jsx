const ChoicesBox = (props) => {
   return (
      <div className="mx-10 my-[10dvh] md:my-[20dvh]">
         <div
            className=" text-pink-900 quicksand-bold  active:bg-pink-700/50 shadow py-1 px-4 mt-1 md:py-4 cursor-pointer text-center
               border-[2px] border-pink-900
               rounded-xl bg-pink-200 bg-opacity-[95%]
               hover:bg-pink-900 hover:text-white hover:scale-105 transition-all duration-200"
            onClick={() => (window.location.href = "/good-ending")}
         >
            <a>{props.textYes}</a>
         </div>
         <div
            className=" text-pink-900 quicksand-bold  active:bg-pink-700/50 shadow py-1 px-4 mt-1 md:py-4 cursor-pointer text-center
                           border-[2px] border-pink-900
                           rounded-xl bg-pink-200 bg-opacity-[95%]
                           hover:bg-pink-900 hover:text-white hover:scale-105 transition-all duration-200"
            onClick={() => (window.location.href = `${props.hrefNo}`)}
         >
            <a>{props.textNo}</a>
         </div>
      </div>
   );
};

export default ChoicesBox;
