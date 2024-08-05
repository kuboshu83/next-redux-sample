"use client";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store";
import { login, logout } from "../features/LoginSlice";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isLogined = useSelector((state: RootState) => state.login.logined);
  const loginHandler = () => {
    if (isLogined) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <div className="h-full flex items-center justify-between">
      <h1 className="text-3xl font-bold m-5">Redux Sample</h1>
      <button className="text-xl font-bold m-5" onClick={loginHandler}>
        {isLogined ? "Logout" : "Login"}
      </button>
    </div>
  );
};
