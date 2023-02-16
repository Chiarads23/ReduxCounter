import "./index.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const store = useSelector((state) => state);
  const { count, user } = store;

  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <h1>{user.userName}</h1>
      <h2>{count.value}</h2>
      <button onClick={() => dispatch({ type: "INCR" })}>+</button>
      <button onClick={() => dispatch({ type: "DECR" })}>-</button>
      <button
        onClick={() => dispatch({ type: "SET_USERNAME", payload: "Chiara" })}
      >
        {" "}
        Set Username
      </button>
    </div>
  );
};

export default Counter;
