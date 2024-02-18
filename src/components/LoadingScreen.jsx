import { FaHeart } from "react-icons/fa";

const LoadingScreen = () => {
   return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center bg-pink-300 justify-center z-50 flex-col gap-20">
         <FaHeart
            className="text-white w-28 h-28 animate-ping"
            style={{
               filter: "drop-shadow(0 0 20px #ffe6ff)",
            }}
         />
         <p className="text-white text-4xl font-bold twinkle-star-regular animate-pulse">
            Loading....
         </p>
      </div>
   );
};

export default LoadingScreen;
