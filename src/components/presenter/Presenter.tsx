import React from "react";

type Props = {};

const Presenter = (props: Props) => {
  return (
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
          maybe i can help you
        </p>
        <p>
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
  );
};

export default Presenter;
