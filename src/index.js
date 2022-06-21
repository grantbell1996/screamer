import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Screamer } from "./Screamer.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Screamer />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)