import React from "react";
import "./Button.css"

const App = ({children}) => (
    <div className="btn-wrapper">
       
        <button>{children}</button>
    </div>
)

export default App