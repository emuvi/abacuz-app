import React from "react";

export type BaseState = {
  token: string;
};

export const BaseStart = {
  token: "",
};

export type BaseProps = {
  base: {
    is_logged: () => boolean;
    log_in: (access: string) => void;
    log_out: () => void;
  };
};

export const BaseContext = React.createContext<BaseState>(BaseStart);
