import { ReactNode } from "react";

export interface BoxProps {
  type: string;
  style?: string;
  active?: boolean;
  children?: ReactNode;
}
