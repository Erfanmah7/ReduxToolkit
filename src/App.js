import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementbyamount,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const counter = useSelector((state) => state.counter.counterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter : {counter}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>decrement</button>{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementbyamount(+value))}>
        incrementbyamount
      </button>
      <h3>Number : {counter}</h3>
    </div>
  );
}

export default App;
