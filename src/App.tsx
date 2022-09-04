import "./App.css";
import Telegram from "./assets/Telegram";
import { Link } from "react-router-dom";
import { ReactComponent as _108 } from "./assets/108.svg";
import List from "./components/list/List";
import Ticker from "./components/Ticker/Ticker";
import Layout from "./components/Layout/Layout";
import Presenter from "./components/presenter/Presenter";

function App() {
  return (
    <div className="App">
      <Layout>
        <Presenter />
        <List />
      </Layout>
    </div>
  );
}

export default App;
