/**
 * APP Configuration
 * -----------------
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 * @copyright FA Solutions Oy
 *
 * Contains configurations for whole app
 
 * -- Change required here in this file --
 */

import { IAppConfig } from "@faharmony/core";
import { languageCodes } from "@faharmony/locale";
import { KeycloakConfig } from "@faharmony/service";
import { faYinYang } from "@faharmony/icons";
import {
  faBitbucket,
  faJira,
  faConfluence,
  faSketch,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

/**
 * List of Module Ids. Should match the folder name.
 * If the Module Id is not in the list, the app
 * will not include the Module.
 */
// export const ModulesIdList = ["welcome", "components", "logo"];
export const ModulesIdList = ["components"];

/**
 * App icon visible in Landing page.
 * It should match the icon visible in FA Global Bar.
 */
export const appIcon: IAppConfig["icon"] = faYinYang;

/**
 * Define all Keycloak roles that this application/client has.
 */
export const appRoles = {
  /** Sample role for users. */
  // USER: "ROLE_USER",
  // Add roles to match keycloak client roles
};

/**
 * List of language codes using Harmony's languageCodes.
 */
export const appLanguages: IAppConfig["languages"] = [
  languageCodes.English,
  // languageCodes.Finnish,
];

/**
 * Array of icon-buttons (preferably). No need to wrap the buttons in div or ButtonGroup.
 */
export const appActions: IAppConfig["actions"] = [
  {
    id: "repo",
    icon: faBitbucket,
    tooltip: "Bitbucket repository",
    onClick: () =>
      window.open(
        "https://bitbucket.org/fasolutions-ondemand/faharmony/",
        "_blank"
      ),
  },
  {
    id: "jira",
    icon: faJira,
    tooltip: "Jira project",
    onClick: () =>
      window.open("http://fasolutions.jira.com/browse/HAR/", "_blank"),
  },
  {
    id: "confluence",
    icon: faConfluence,
    tooltip: "Confluence wiki",
    onClick: () =>
      window.open(
        "https://fasolutions.jira.com/wiki/spaces/FP/pages/1555202106",
        "_blank"
      ),
  },
  {
    id: "npm",
    icon: faNpm,
    tooltip: "NPM packages",
    onClick: () =>
      window.open("http://github.com/faharmony/faharmony/packages", "_blank"),
  },
  {
    id: "sketch",
    icon: faSketch,
    tooltip: "Sketch project",
    onClick: () =>
      window.open("https://www.sketch.com/documents/p/j2m0", "_blank"),
  },
];

/**
 * Uncomment the following line to load keycloak config
 * from a public keycloak.json file.
 * (Do comment the other declaration)
 */
// const keycloakConfig = `${process.env.PUBLIC_URL}/keycloak.json`;

/**
 * Uncomment the following line to load keycloak config
 * from a private keycloakConfig object.
 * (Do comment the other declaration)
 */
export const keycloakConfig: KeycloakConfig = {
  url: `${process.env.REACT_APP_KEYCLOAK_URL}`,
  realm: "fa",
  clientId: "fa-admin-app",
};

/**
 * Enabling navigation filter shows an option to filter
 * the subModules in App menu.
 */
export const enableNavigationFilter = true;

/**
 * Enabling devMode bypasses keycloak authentication.
 * This also means that user data and auth token is not
 * available in the runtime.
 *
 * As a fail-safe, devMode is disabled in production.
 */
export const devMode = false;
