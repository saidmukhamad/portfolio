import "./App.css";
import Telegram from "./assets/Telegram";

function App() {
  return (
    <div className="App">
      <p className="me-108">
        SAIDMUKHAMAD's web page for tests and other things, welcome!
      </p>

      <div className="contact-108">
        if you want to contact with me, pls write here{" "}
        <a className="telegram" href="https://t.me/saidmukhamad">
          <Telegram />
        </a>
      </div>
    </div>
  );
}

export default App;
