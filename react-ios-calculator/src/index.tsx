import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { DisplayContextProvider } from "./store/display-context";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <DisplayContextProvider>
        <App />
    </DisplayContextProvider>
);
