import { useState } from "react";
import "./App.css";
import { arr } from "./products";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <button
        className="btn button1"
        style={{
          height: "40px",
        }}
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          } else if (index === 0) {
            setIndex(arr.length - 1);
          }
        }}
      >
        <MdArrowBackIos style={{ fontSize: "25px" }} />
      </button>

      <img width={1200} src={arr[index]} alt="image not loaded" />

      <button
        className="btn button2"
        style={{
          height: "40px",
        }}
        onClick={() => {
          if (index < arr.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
      >
        <MdArrowForwardIos style={{ fontSize: "25px" }} />
      </button>
    </div>
  );
}

export default App;
