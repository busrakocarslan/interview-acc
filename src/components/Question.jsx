import React, { Fragment } from "react";
import questions from "../helper/data"
import InterviewAcc from "./InterviewAccord";


function Question() {
  return (
    <div className="headDiv">
      {questions.map((ques) => (

        <InterviewAcc ques={ques} key={ques.id}/>
        
      ))}
    </div>
  );
}

export default Question;
