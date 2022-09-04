import { useState, useEffect } from "react";
import { database } from "./database/database";
import "./ticker.css";

export { database } from "./database/database";

type Props = {};

function Ticker({}: Props) {
    const [ticker, setTicker] = useState({
        text: database[3],
        seconds: Math.floor(database[3].length / 17 + 4),
    });

    useEffect(() => {
        let meme = setTimeout(function animate(i = 0) {
            console.log(i);
            let seconds = Math.floor(database[i].length / 17 + 4);
            setTicker({
                text: database[i],
                seconds,
            });
            if (i == database.length - 1) {
                i = 0;
            } else {
                i++;
            }
            meme = setTimeout(animate.bind(null, i), ticker.seconds * 1000);
        }, ticker.seconds * 1000);

        return () => clearTimeout(meme);
    }, []);

    useEffect(() => {
        let seconds = setTimeout(function hm() {
            console.log("прошла секунда");
            seconds = setTimeout(hm, 1000);
        }, 1000);

        return () => clearTimeout(seconds);
    }, []);

    console.log(ticker);
    return (
        <div className="ticker">
            {/* {ticker.map((text, index) => (
        <p>{text} &nbsp;</p>
      ))} */}
            <div className="ticker-container">
                <div
                    className="ticker-child"
                    style={{ animationDuration: `${ticker.seconds}s` }}
                >
                    {ticker.text}
                </div>
            </div>
        </div>
    );
}

export default Ticker;
