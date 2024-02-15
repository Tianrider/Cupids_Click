import { useState } from "react";
import ChoicesBox from "../components/ChoicesBox";
import TextBox from "../components/TextBox";
import DialogBox from "../components/DialogBox";

function MainPage() {
    const [count, setCount] = useState(0);
    const [choices, setChoices] = useState(false);

    const texts = [
        "ini text pertama, i love you beb <3",
        "ini text kedua, jadian yuk",
        "ini text ketiga, mau gak??",
    ];

    const handleIncrement = () => {
        if (count >= texts.length - 1) {
            setChoices(true);
        }
        if (!choices && count < texts.length - 1) {
            setCount(count + 1);
        }
    };

    return (
        <>
            <div className="h-dvh w-screen items-center justify-start gap-8 flex flex-col-reverse bg-blue-300">
                {/* textBox = textArray */}
                <TextBox texts={texts} count={count} />

                {/* dialogBox = next / back */}
                <DialogBox handleIncrement={handleIncrement} />

                {/* show choicesBox kalo array nya udah abis */}
                {choices && (
                    <ChoicesBox
                        textYes="Mauu"
                        textNo="IUW NAJIS"
                        hrefNo="/no-one"
                    />
                )}
            </div>
        </>
    );
}

export default MainPage;
