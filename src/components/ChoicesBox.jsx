const ChoicesBox = (props) => {
   return (
      <div className="">
         <div
            className="
            flex flex-col items-end py-2 px-4 mb-20
            rounded-xl bg-gradient-to-bl from-pink-300/100 to-pink-400/80
            outline-pink-600/80 outline-offset-4 outline outline-4
            text-white
          "
         >
            <div>
               <h1 className="text-lg font-bold">Jawabanmu?</h1>
               <hr className="-mx-4 mt-2 mb-2" />
               <div
                  className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer text-center"
                  onClick={() => (window.location.href = "/good-ending")}
               >
                  <a>{props.textYes}</a>
               </div>
               <div
                  className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer text-center"
                  onClick={() => (window.location.href = `${props.hrefNo}`)}
               >
                  <a>{props.textNo}</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ChoicesBox;
