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
            pls take a look at my{" "}
            <a target={"_blank"} href="https://disk.yandex.ru/i/u6stEqHgakz2-g">
              cv
            </a>{" "}
            , maybe i can help you
          </p>
          <p>
            {" "}
            {/* if you want my github, here's a{" "} */}
            <a
              className="telegram"
              target={"_blank"}
              href="http://github.com/saidmukhamad/"
            >
              {/* link */}
              github
            </a>{" "}
          </p>
          <p>
            <a
              className="telegram"
              target={"_blank"}
              href="http://github.com/saidmukhamad/"
            >
              {/* link */}
              contact me
            </a>{" "}
          </p>
        </div>
      </div>

      <ul className="what-i-did-container">
        <span>Just a joyful things that i made</span>
        <li>
          <a target={"_blank"} href="http://62.113.105.4/">
            {" "}
            Test for internet shop
          </a>
          <p>P.S. running on development mode, loading will be slow :(</p>
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
