/**
 * MODULE
 * ------
 * This is the module configuration
 * -- Change required here --
 *
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 * @copyright FA Solutions Oy
 */

import * as Components from "./pages";
import { faCubes } from "@faharmony/icons";
import { IModuleProps } from "@faharmony/module";
// import { appRoles } from "../../config";

/**
 * Should match the Module folder name
 */
export const ModuleId: string = "components";

// /**
//  * List of roles to restrict access.
//  * Empty array for unrestricted access.
//  */
const ModuleRoles: IModuleProps["roles"] = [];

/**
 * Icon of the Module. Visible in Menu.
 */
const ModuleIcon: IModuleProps["icon"] = faCubes;

const subModules: IModuleProps["subModules"] = [
  {
    id: "accordion",
    label: "Accordion",
    component: Components.Accordion,
  },
  {
    id: "button",
    label: "Button",
    component: Components.Button,
  },
  {
    id: "navigation",
    label: "Navigation",
    component: Components.Navigation,
  },
  {
    id: "skeleton",
    label: "Skeleton",
    component: Components.Skeleton,
  },
  {
    id: "table",
    label: "Table",
    component: Components.Table,
  },
  {
    id: "inputField",
    label: "InputField",
    component: Components.InputField,
  },
];

/**
 * -------------------
 * DO NOT CHANGE BELOW
 * -------------------
 */
export default (): IModuleProps => ({
  id: ModuleId,
  label: "Components",
  roles: ModuleRoles,
  icon: ModuleIcon,
  component: Components.MainPage,
  subModules,
});
