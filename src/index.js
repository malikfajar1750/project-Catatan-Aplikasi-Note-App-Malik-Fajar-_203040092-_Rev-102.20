import React from "react";
import ReactDoom from "react-dom/client";
import App from "./Components/NoteApp";

import './styles/styles.css'
const Root =ReactDoom.createRoot(document.getElementById("root"))
Root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)