import { FaHeart } from "react-icons/fa";

const LoadingScreen = () => {
   return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center bg-pink-300 justify-center bg-z-50 flex-col gap-5">
         <FaHeart className="text-white w-32 h-32 animate-pulse" />
         <p className="text-white text-4xl font-bold twinkle-star-regular animate-pulse">
            Loading....
         </p>
      </div>
   );
};

export default LoadingScreen;
