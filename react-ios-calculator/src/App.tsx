import { BrowserRouter, Routes, Route } from "react-router-dom";

import UseContextApproach from "./pages/UseContextApproach";
import UseStateApproach from "./pages/UseStateApproach";
import UseReducerApproach from "./pages/UseReducerApproach";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UseStateApproach />} />
                <Route path="/use-state" element={<UseStateApproach />} />
                <Route path="/use-context" element={<UseContextApproach />} />
                <Route path="/use-reducer" element={<UseReducerApproach />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
