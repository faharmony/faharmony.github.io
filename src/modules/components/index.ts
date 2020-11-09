/**
 * MODULE
 * ------
 * This is the module configuration
 * -- Change required here --
 *
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 * @copyright FA Solutions Oy
 */

import { lazy } from "react";
import { components } from "./pages";
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

const subModules: IModuleProps["subModules"] = components.map((c) => ({
  id: c,
  label: c,
  component: lazy(() => import(`./pages/${c}`)),
}));

/**
 * -------------------
 * DO NOT CHANGE BELOW
 * -------------------
 */
export default {
  id: ModuleId,
  label: "Components",
  roles: ModuleRoles,
  icon: ModuleIcon,
  component: lazy(() => import("./pages/MainPage")),
  subModules,
} as IModuleProps;
