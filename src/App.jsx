import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GoodEnding from "./pages/GoodEnding";
import NoOne from "./pages/NoOne";
import BadEnding from "./pages/BadEnding";
import NoTwo from "./pages/NoTwo";
import NoThree from "./pages/NoThree";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/good-ending" element={<GoodEnding />} />
                <Route path="/bad-ending" element={<BadEnding />} />
                <Route path="/no-one" element={<NoOne />} />
                <Route path="/no-two" element={<NoTwo />} />
                <Route path="/no-three" element={<NoThree />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
