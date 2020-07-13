/**
 * InitialState
 * ---
 * This file maintains the type definition
 * and the actual initialState of the Module.
 */

/** Type definition of the Module's state */
export interface IModuleState {
  loading: boolean;
  isConfigDrawerOpen: boolean;
  config: {
    size: number;
    color: { primary: string; secondary: string };
    text: string;
    variant: "all" | "company" | "platform";
    icon: "all" | "transparent" | "opaque";
  };
}

export const colors = { brand: "#AE001A" };

/** Initial state of Module */
export default {
  loading: true,
  isConfigDrawerOpen: true,
  config: {
    size: 200,
    color: { primary: colors.brand, secondary: "" },
    text: "",
    variant: "all",
    icon: "all",
  },
} as IModuleState;
