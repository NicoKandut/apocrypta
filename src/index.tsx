import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./app/App"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import reportWebVitals from "./reportWebVitals"
import StoreProvider from "./providers/StoreProvider"

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorkerRegistration.register()
reportWebVitals()
