"use client";

import { decrement, increment } from "@/lib/features/counter/counterSlice";
import { useAppSelector } from "@/lib/hooks";
import { useDispatch } from "react-redux";

export default function CounterComponent() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>This is RTK </p>
      <p>{count}</p>

      <button onClick={() => dispatch(increment())}>Increase</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
