import sadFace from "../assets/sad-face.png";

function MainPage() {
  return (
    <>
      <div className="h-dvh w-screen items-center justify-center gap-8 flex bg-pink-600">
        <div id="404-container" className="text-center flex max-md:flex-col gap-16 items-center">
          <img src={sadFace} className="w-25 hue-rotate-90 m-auto hover:animate-spin" alt="sad face" />
          <div id="text-container" className="text-left max-md:text-center">
            <h1 className="text-white font-bold mb-8 text-8xl">404</h1>
            <p className="text-white text-xl">Page not found <br />but you'll find your partner in life: <b>ME</b> </p>
            <p className="text-white text-xl my-2">so hit me up😘</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;