import "./App.css";
import Telegram from "./assets/Telegram";
import { Link } from "react-router-dom";
import { ReactComponent as _108 } from "./assets/108.svg";
import Ticker from "./components/Ticker/Ticker";

function App() {
  return (
    <div className="App">
      <div className="present-container">
        <p className="me-108">
          SAIDMUKHAMAD's web page for tests and other things, welcome!
        </p>

        <div className="contact-108">
          <p>
            {" "}
            if you want to contact with me, pls write{" "}
            <a className="telegram" href="https://t.me/saidmukhamad">
              here
            </a>{" "}
          </p>
          <p>
            {" "}
            if you want my github, here's a{" "}
            <a className="telegram" href="http://github.com/saidmukhamad/">
              link
            </a>{" "}
          </p>
        </div>
      </div>

      <ul className="what-i-did-container">
        <span>Just a joyful things that i made</span>
        <li>
          <a href="http://62.113.105.4/"> Test for internet shop</a>
          <p>P.S.running on development mode, loading will be slow :(</p>
        </li>
        {/* <li>
          <a href={"/calculator"}>Calculator</a>{" "}
          <p>Made it because i was tired one night </p>
        </li> */}
      </ul>

      <Ticker />
    </div>
  );
}

export default App;
