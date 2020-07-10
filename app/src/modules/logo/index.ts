/**
 * MODULE
 * ------
 * This is the module configuration
 * -- Change required here --
 *
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 * @copyright FA Solutions Oy
 */

import { IModuleProps } from "@faharmony/module";
import { faFlask } from "@faharmony/icons";
import { MainPage } from "./pages";
import { ModuleState } from "./state";
// import { appRoles } from "../../config";

/** Should match the Module folder name */
export const ModuleId: string = `logo`;

/** Fallback Module label.
 * Actual label is taken from locale files (key: moduleName) */
const ModuleLabelFallback: string = `Logo generator`;

/**
 * List of roles to restrict access.
 * Empty array for unrestricted access.
 *
 * Use appRoles object defined in App configuration
 * to access roles available in app.
 */
const ModuleRoles: IModuleProps["roles"] = [];

/** Icon of the Module. Visible in Menu. */
const ModuleIcon: IModuleProps["icon"] = faFlask;

/** Sub-modules of the module. Visible in Menu
 * Empty array means no subModules. */
const subModules: IModuleProps["subModules"] = [];

/**
 * MODULE CONFIG
 * -------------
 * DO NOT CHANGE
 */
export default () =>
  ({
    id: ModuleId,
    component: MainPage,
    label: ModuleLabelFallback,
    roles: ModuleRoles,
    icon: ModuleIcon,
    state: ModuleState,
    subModules,
  } as IModuleProps);
