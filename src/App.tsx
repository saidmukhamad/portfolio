import "./App.css";
import Telegram from "./assets/Telegram";
import { Link } from "react-router-dom";
import { ReactComponent as _108 } from "./assets/108.svg";

function App() {
  return (
    <div className="App">
      <p className="me-108">
        SAIDMUKHAMAD's web page for tests and other things, welcome!
      </p>

      <div className="contact-108">
        if you want to contact with me, pls write here
        <a className="telegram" href="https://t.me/saidmukhamad">
          <Telegram />
        </a>
      </div>

      <ul>
        <span>Just a joyful things that i made</span>
        <li>
          <a href="http://62.113.105.4/"> Test for internet shop</a>
          <p>P.S.running on development mode, loading will be slow :(</p>
        </li>
        <li>
          <a href={"/calculator"}>Calculator</a>{" "}
          <p>Made it because i was tired one night </p>
        </li>
      </ul>
    </div>
  );
}

export default App;
