"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { increment, reset } from "../features/CounterSlice";

export const Counter: React.FC = () => {
  const counterValue = useSelector((state: RootState) => state.counter.counter);
  const isLogined = useSelector((state: RootState) => state.login.logined);
  const dispatch = useDispatch();
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="w-1/2 flex flex-col items-center gap-1">
        <h1 className="text-4xl font-bold">Counter: {counterValue}</h1>
        <div className="flex flex-col gap-2 w-1/2">
          <button
            className="bg-gray-400 p-2 rounded-md"
            onClick={() => dispatch(increment())}
          >
            CounteUp
          </button>
          <button
            className="bg-gray-400 p-2 rounded-md"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
        <div className="text-xl font-bold">
          {isLogined ? "ログイン中" : "ログインしてください"}
        </div>
      </div>
    </div>
  );
};
