import React from "react";

export type BaseState = {
  lang: string;
  token: string;
  showInfo: string;
  showError: string;
};

export const BaseStart: BaseState = {
  lang: "",
  token: "",
  showInfo: "",
  showError: "",
};

export type BaseProps = {
  base: {
    isLogged: () => boolean;
    logIn: (lang: string, token: string) => void;
    logOut: () => void;
    showInfo: (message: string) => void;
    showError: (message: string) => void;
  };
};

export const BaseContext = React.createContext<BaseState>(BaseStart);
