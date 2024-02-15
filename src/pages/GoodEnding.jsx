import React from "react";
import { TypeAnimation } from "react-type-animation";
import Couple from "../assets/couple1.png";
import sakuraBg from "../assets/sakura-tree-hill.png"

function GoodEnding() {
  return (
    <div
      className="h-[100vh] w-screen flex flex-wrap flex-1 justify-center items-center overflow-auto"
      style={{
        backgroundImage: `url(${sakuraBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >

      <div className="" style={{ background: 'rgba(255, 255, 255, 0.3)' }}></div>
      <div className="relative flex flex-col md:flex-row justify-center items-center">
        <div className="w-1/2 h-auto flex justify-center">
          <div className="w-[32rem] h-screen relative"> 
            <img
              src={Couple}
              alt="CoupleInLove"
              className="absolute bottom-0 overflow-auto"
            />
          </div>
        </div>
        <div className='w-1/2 mr-4 h-auto bg-pink-200 bg-opacity-65 bg-flex border-2 border-pink-700 items-center rounded-md'>
          <div className='p-3'>
          <p className="font-serif italic text-center bg-gradient-to-r">
            <TypeAnimation
            sequence={[
              "My Bravest Confession",
              1000,

            ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: "2rem", color: "indigo" }}
            />
          </p>
            <h1 className='font-Cormorant font-thin pt-5'>Dear Dayu Aventail, </h1>
            <p className="font-Cormorant font-thin">
              YOU FILL MY HEART WITH JOY 💖<br/>
          
              We&apos;re now officially partners in Valentine&apos;s adventures! :o
              <br /><br />
          
              This is officially my best day because you&apos;re choosing me! In return, I promise to fill your days with endless joy and to cherish every moment we share, ensuring you never have a reason to doubt your choice.
              <br /> <br />
              Are you ready to start the amazing journey ahead of us together with me? Let&apos;s create  unforgettable memories and share our days filled with affection and delightful surprises! All&apos;s well that ends well to end up with you 💝
              <br /> <br />
            </p>
            <p className='italic font-Cormorant font-thin'>
              “Love&apos;s script ends with us together, a perfect ending to a beautiful beginning”
              <br/><br/>
            </p>
            <p className="font-Cormorant font-thin">  
              Sincerely yours💐
            </p>
            <div className='pt-4 flex items-end justify-end'>
              <button 
                type='button'
                onClick={() => location.href = "/"}
                className="text-white border-4 border-white font-bold rounded-full text-2xl px-12 py-2 text-center me-2 mb-2 libre-baskerville-bold transition-all duration-500 hover:bg-pink-400 hover:border-pink-500 shadow-lg hover:shadow-xl hover:scale-110 overflow-auto"
              > Main Page </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoodEnding;
