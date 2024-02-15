// @Jonathan

import { useState } from "react";
import ChoicesBox from "../components/ChoicesBox";
import TextBox from "../components/TextBox";
import DialogBox from "../components/DialogBox";


function NoTwo() {
    const [count, setCount] = useState(0);
    const [choices, setChoices] = useState(false);

    const texts = ["Guess what? You got ME!"];

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
                <TextBox texts={texts} count={count} />

                <DialogBox handleIncrement={handleIncrement} />

                {choices && (
                    <ChoicesBox
                        textYes="Mauu"
                        textNo="IUW NAJIS"
                        hrefNo="/no-three"
                    />
                )}
            </div>
        </>
    );
}

export default NoTwo;