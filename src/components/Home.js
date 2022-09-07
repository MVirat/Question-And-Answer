import React, { useState } from "react";
import "./home.css";
import Form from "./Form";
import Result from "./Result";
// Database File
const db = require("../db.json");
const data = db.questions;

export default function Home() {
  const [showFinalResult, setFinalResult] = useState(false);
  // Current  Question Couter
  const [curQuestion, setCurQuesstion] = useState(0);

  // NEXT and PREV Button function
  const next = (e) => {
    e.preventDefault();
    if (curQuestion + 1 < data.length) {
      setCurQuesstion(curQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  const prev = (e) => {
    e.preventDefault();
    setCurQuesstion(curQuestion - 1);
  };

  return (
    <div>
      {showFinalResult ? (
        <Result />
      ) : (
        <div className="homeWrap">
          <div className="homeBox">
            <div className="tittle">Exam Questions & Answer</div>
            <form className="qboxs">
              {<Form data={data[curQuestion]} key={data.questionid} />}
              <div className="btnContainer">
                {curQuestion > 0 ? (
                  <button className="btnPrev" onClick={prev}>
                    {" "}
                    PREV
                  </button>
                ) : (
                  <div />
                )}
                <button className="btn" onClick={next}>
                  {" "}
                  {curQuestion === data.length - 1 ? "RESULT" : "NEXT"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
