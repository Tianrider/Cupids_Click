import { useState } from "react";
import TextBox from "../components/TextBox";
import DialogBox from "../components/DialogBox";

function GoodEnding() {
    const [count, setCount] = useState(0);

    const texts = ["ini Good Ending"];

    const handleIncrement = () => {
        if (count < texts.length - 1) {
            setCount(count + 1);
        }
    };

    return (
        <div className="h-dvh w-screen items-center justify-start gap-8 flex flex-col-reverse bg-blue-300">
            <TextBox texts={texts} count={count} />

            <DialogBox handleIncrement={handleIncrement} />
        </div>
    );
}

export default GoodEnding;
