import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContextApproach from "./pages/UseContextApproach";
import UseStateApproach from "./pages/UseStateApproach";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UseStateApproach />} />
                <Route path="/use-state" element={<UseStateApproach />} />
                <Route path="/use-context" element={<UseContextApproach />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
