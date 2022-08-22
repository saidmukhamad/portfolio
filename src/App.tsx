import "./App.css";
import { ReactComponentElement } from "react";
import Telegram from "./assets/Telegram";
import { ReactComponent as _108 } from "./assets/108.svg";

function App() {
  return (
    <div className="App">
      <p className="me-108">
        SAIDMUKHAMAD's web page for tests and other things, welcome!
      </p>

      {/* <_108 width={"120px"} /> */}

      <div className="contact-108">
        if you want to contact with me, pls write here
        <a className="telegram" href="https://t.me/saidmukhamad">
          <Telegram />
        </a>
      </div>
    </div>
  );
}

export default App;
