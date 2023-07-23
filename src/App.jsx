import { useState } from "react";
import { Divide } from "./components/Divide.jsx";
import { Multiply } from "./components/Multiply.jsx";
import { Substract } from "./components/Substract.jsx";
import { Sum } from "./components/Sum.jsx";
import { History } from "./components/History.jsx";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [historic, setHistoric] = useState([]);
  const [editions, setEditions] = useState(0);

  const handleSumClick = () => {
    setCounter(counter + 1);
    modifyValue();
  };
  const handleSubstractClick = () => {
    setCounter(counter - 1);
    modifyValue();
  };
  const handleMultiplyClick = () => {
    setCounter(counter * 2);
    modifyValue();
  };
  const handleDivideClick = () => {
    setCounter(counter / 2);
    modifyValue();
  };

  const modifyValue = () => {
    setHistoric([...historic, counter]);
    setEditions(editions + 1);
  };

  return (
    <div>
      <h1>Synchronizing data on React Components</h1>
      <h3>Counter is currently on {counter}</h3>
      <div className="buttons">
        <Sum count={counter} onClick={handleSumClick} />
        <Substract count={counter} onClick={handleSubstractClick} />
        <Multiply count={counter} onClick={handleMultiplyClick} />
        <Divide count={counter} onClick={handleDivideClick} />
        <History dataArray={historic} />
      </div>
    </div>
  );
}
