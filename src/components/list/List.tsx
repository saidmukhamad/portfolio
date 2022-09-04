import React from "react";

type Props = {
    children: React.ReactNode;
};

const List = () => {
    return (
        <ul className="what-i-did-container">
            <span>Just a joyful things that i made</span>
            <li>
                <a className="disabled" target={"_blank"} href="http://62.113.105.4/">
                    {" "}
                    Test for internet shop
                </a>
                <p className="disabled">
                    P.S. running on development mode, loading will be slow :(
                </p>
                <p>
                    you can look at code{" "}
                    <a
                        target={"_blank"}
                        href="https://github.com/saidmukhamad/MiniMelissa"
                    >
                        here
                    </a>
                </p>
            </li>

            {/* <li>
    <a href={"/calculator"}>Calculator</a>{" "}
    <p>Made it because i was tired one night </p>
  </li> */}
        </ul>
    );
};

export default List;
