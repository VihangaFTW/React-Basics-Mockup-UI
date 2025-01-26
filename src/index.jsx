import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";


import "./components/Header/Header.css";
import "./components/CoreConcept/CoreConcept.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
