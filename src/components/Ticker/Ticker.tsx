import { useState } from "react";
import { database } from "./database/database";
import "./ticker.css";

export { database } from "./database/database";

type Props = {};

function Ticker({}: Props) {
  const [ticker, setTicker] = useState(database[0].split(" "));

  return (
    <div className="ticker">
      {/* {ticker.map((text, index) => (
        <p>{text} &nbsp;</p>
      ))} */}
      <div className="ticker-container">
        <div className="ticker-child">{database[0]}</div>
      </div>
    </div>
  );
}

export default Ticker;
