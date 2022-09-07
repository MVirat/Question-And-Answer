import React, { useEffect } from "react";
import "./form.css";


export default function Form({ data }) {
  const res = [];

  
  // Getting the user input
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const id = data.questionid;

    var ress = {
      qno: data.questionid,
      qest: data.question,
      ans: value,
    };

    var str = JSON.stringify(ress);
    console.log(str);
    res.push(str);
// Storing the result in JSON server
    fetch("http://localhost:8000/result",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: str
    }).then(()=>{
      console.log("added");
    })
  };
  useEffect(() => {
    fetch("http://localhost:8000/result").then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
    })
  }, []);
  console.log(res);

  return (
    <div>
      <div key={data.questionid}>
        <div className="questions">
          <span>Q.{data.questionid}</span> {data.question}
        </div>
        <ul>
          {data.questionoption.map((o) => (
            <div className="options">
              <input
                key={o.optionid}
                type={data.questiontype}
                value={o.price}
                name={data.questionid}
                onChange={handleChange}
              />
              
              <label> {o.optionvalue}.</label> <label>{o.price}</label>
            </div>
          ))}
  
        </ul>
      </div>
    </div>
  );
}
