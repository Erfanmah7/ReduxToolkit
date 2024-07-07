import {
  increment,
  decrement,
  numberSelector,
} from "../features/number/numberSlice";
import { useDispatch, useSelector } from "react-redux";

function Number() {
  const number = useSelector(numberSelector);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Number : {number}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>decrement</button>{" "}
    </>
  );
}

export default Number;
