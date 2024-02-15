import sadFace from "../assets/sad-face.png";
import TextBox from "../components/TextBox";

function MainPage() {
  return (
    <>
      <div className="h-dvh w-screen items-center justify-center gap-8 flex bg-pink-600">
        <div id="404-container" className="text-center flex max-md:flex-col gap-16 items-center">
          <img src={sadFace} className="w-20 hue-rotate-90 m-auto" alt="sad face" />
          <div id="text-container" className="text-left max-md:text-center">
            <h1 className="text-white font-bold mb-8 text-8xl">404</h1>
            <p className="text-white text-xl">Yang kamu cari aku <br />Tapi yang kamu ketemu gak ada</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
