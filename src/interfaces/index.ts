import { BtnDisplayed } from "../types/index";

export interface ButtonProps {
  children: React.ReactNode;
	id?: number | string;
  type?: "primary" | "secondary";
  isBtnDisabled: boolean;
	activeBtnId?: string;
  btnDisplayed?: BtnDisplayed;
}