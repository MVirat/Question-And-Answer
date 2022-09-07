import React from "react";
const resdb = require("../result.json");
const result = resdb.result;

export default function Result() {
  console.log(result);

  return (
    <div className="homeWrap">
      <div className="homeBox">
        <div className="tittle">Result</div>
        <div className="qboxs">
          {result.map((r) => (
            <div key={r.id}>
              <div className="resline">
                <h4>
                  Q.{r.qno} {r.qest}
                </h4>{" "}
                <span>Ans.{r.ans}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
