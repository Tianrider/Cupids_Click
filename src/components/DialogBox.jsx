const DialogBox = (props) => {
  return (
    <div className="flex justify-end w-4/5">
      <div
        className="
            flex flex-col items-end py-2 px-4 mb-2
            rounded-xl bg-gradient-to-bl from-pink-300/80 to-pink-400/80
            outline-pink-600/80 outline-offset-4 outline outline-4
            text-white
          "
      >
        <div>
          <h1 className="text-lg font-bold">Dialogue Option</h1>
          <hr className="-mx-4 mt-2 mb-2" />
          <div
            className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer"
            onClick={props.handleIncrement}
          >
            TEMP (NEXT TEXT)
          </div>
          <div
            className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer"
            onClick={props.handleIncrement}
          >
            TEMP (BACK TEXT)
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
