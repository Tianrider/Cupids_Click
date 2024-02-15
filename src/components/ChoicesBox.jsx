const ChoicesBox = (props) => {
   return (
      <div className="flex justify-end">
         <div
            className="
            flex flex-col items-end py-2 px-4 mb-2
            rounded-xl bg-gradient-to-bl from-pink-300/80 to-pink-400/80
            outline-pink-600/80 outline-offset-4 outline outline-4
            text-white
          "
         >
            <div>
               <h1 className="text-lg font-bold">Jawabanmu?</h1>
               <hr className="-mx-4 mt-2 mb-2" />
               <div className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                  <a href="/good-ending">{props.textYes}</a>
               </div>
               <div className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                  <a href={props.hrefNo}>{props.textNo}</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ChoicesBox;
