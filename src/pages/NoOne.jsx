import { useState } from "react";
import TextBox from "../components/TextBox";
import DialogBox from "../components/DialogBox";
import background from "../assets/background-no-one.png";
import chara1Image from "../assets/chara-no-one.png";
import chara2Image from "../assets/chara-no-three.png";
import tutorialVideo from "../assets/tutorial-video.gif";

const NoOne = () => {
    const [count, setCount] = useState(0);
    const [choices, setChoices] = useState(false);
    const [showTutorialVideo, setShowTutorialVideo] = useState(false);
    const [chara2Visible, setChara2Visible] = useState(false);
    const [chara1Visible, setChara1Visible] = useState(true);


    const texts1 = [
        "I'll memorize every detail of your happiness, so I can be the only one who knows exactly how to bring a smile to your face, every single time.",
        "Take a leap of faith.",
        "Will you accept my feelings?",
    ];

    const texts2 = [
        "Oh, you were about to click \"no,\" do you?",
        "But let me ask you a quick question before you get going.",
        "Would you like to have ten million dollars?",
        "HA!!",
        "I've got your attention, let's go through a quick tutorial on how to click \"yes.\"",
        "Lets try again shall we?",
    ];

    const handleIncrement = () => {
        if (showTutorialVideo) {
            if (count >= texts2.length - 1) {
                setShowTutorialVideo(true);
            } else {
                setCount(count + 1);
            }
        } else {
            if (count >= texts1.length - 1) {
                setChoices(true);
            } else {
                setCount(count + 1);
            }
        }
    };
    

    const handleDecrement = () => {
        if (count <= 0) {
            return;
        }
        if (texts1[count] === texts2) { // Check if the current text is texts2
            return; // Don't decrement further if it's texts2
        }
        setCount(count - 1);
    };
    
    
    
    

    const handleTutorialVideo = () => {
        setChoices(false);
        setChara1Visible(false);
        setChara2Visible(true);
        setCount(0);
        setShowTutorialVideo(true);
    };

    return (
        <>
            {showTutorialVideo ? (
                <div className="w-auto h-1/2 absolute z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {count === 4 && (
                        <img
                        src={tutorialVideo}
                        alt="tutorial video"
                        className="max-w-80 max-h-30 w-auto h-auto"
                    />
                    
                    )}
                    {count === 5 && (
                        <div className="mx-auto max-w-lg p-4">
                        <div className="py-2 px-4 mb-2 rounded-xl bg-gradient-to-bl from-pink-300/80 to-pink-400/80 outline-pink-600/80 outline-offset-4 outline outline-4 text-white">
                            <div>
                                <h1 className="text-lg font-bold">Jawabanmu?</h1>
                                <hr className="-mx-4 mt-2 mb-2" />
                                <div className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                                    <a
                                        href="/good-ending"
                                        className="block w-full h-full" // Set the anchor tag to be block-level and cover the entire parent div
                                    >
                                        Yes
                                    </a>
                                </div>
                                <div className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                                    <a
                                        href="/no-two"
                                        className="block w-full h-full" // Set the anchor tag to be block-level and cover the entire parent div
                                    >
                                        Enggak!!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    )}
                </div>
            ) : (
                <>
                </>
            )}
            <img
                src={background}
                alt="background"
                className="h-screen w-screen z-[-2] absolute top-0 left-0"
            />
            {chara1Visible && (
                <img
                    src={chara1Image}
                    alt="chara"
                    className="h-[90vh] md:h-[94vh] absolute bottom-0 md:right-[57vw] z-[-1]"
                />
            )}

            {chara2Visible && (
                <img
                    src={chara2Image}
                    alt="chara"
                    className="h-[90vh] md:h-[94vh] absolute bottom-0 md:right-[57vw] z-[-1]"
                />
            )}

            <div className="h-dvh w-screen items-center justify-start gap-8 flex flex-col-reverse">
                <TextBox texts={showTutorialVideo ? texts2 : texts1} count={count} />

                <DialogBox
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    style={{ zIndex: 10 }}
                />
                {!showTutorialVideo && choices && (
                    <div className="flex justify-end m-10">
                        <div className="flex flex-col items-end py-2 px-4 mb-2 rounded-xl bg-gradient-to-bl from-pink-300/80 to-pink-400/80 outline-pink-600/80 outline-offset-4 outline outline-4 text-white">
                            <div>
                                <h1 className="text-lg font-bold">Jawabanmu?</h1>
                                <hr className="-mx-4 mt-2 mb-2" />
                                <div className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                                    <a
                                        href="/good-ending"
                                        className="block w-full h-full" // Set the anchor tag to be block-level and cover the entire parent div
                                    >
                                        Yes
                                    </a>
                                </div>
                                <div className="bg-pink-500/50 hover:bg-pink-600/50 active:bg-pink-700/50 rounded-xl shadow py-1 px-3 mt-1 cursor-pointer">
                                    <a
                                        onClick={handleTutorialVideo} // Change handleBlueScreen to handleTutorialVideo
                                        className="block w-full h-full" // Set the anchor tag to be block-level and cover the entire parent div
                                    >
                                        No
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default NoOne;
