import React, { Fragment, useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

function InterviewAcc({ ques }) {
  const [show, setShow] = useState(false);

  const openCon = () => {
    setShow(true);
  };
  const closeCon = () => {
    setShow(false);
  };

  return (
    <div>
      {!show ? (
        <div className="question">
          <p className="icon" onClick={openCon}>
            {arrowdown}
          </p>
          <h2>{ques.question}</h2>
        </div>
      ) : (
        <div className="answer">
          <p className="icon" onClick={closeCon}>
            {arrowup}
          </p>
          <div>
            <h2>{ques.question}</h2>
            <p>{ques.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default InterviewAcc;
