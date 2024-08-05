"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const StateProvider: React.FC<Props> = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
