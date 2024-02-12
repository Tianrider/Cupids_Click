import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YesOne from "./pages/YesOne";
import NoOne from "./pages/NoOne";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yesOne" element={<YesOne />} />
        <Route path="/noOne" element={<NoOne />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
