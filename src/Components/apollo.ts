import { makeVar } from "@apollo/client";

const DARKITEM = "DARKITEM";

export const isLoggedInVar = makeVar(false);
export const darkVar = makeVar(Boolean(localStorage.getItem(DARKITEM)));

export const darkChange = () => {
  localStorage.setItem(DARKITEM, "enabled");
  darkVar(true);
};

export const lightChange = () => {
  localStorage.removeItem(DARKITEM);
  darkVar(false);
};
