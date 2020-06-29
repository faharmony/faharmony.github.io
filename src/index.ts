/**
 * FA-REACT-APP - Root
 * ---
 * @readonly No changes required in this file.
 *
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 * @copyright FA Solutions Oy
 *
 * This file is responsible for building the whole
 * Application. By default, it uses a Harmony Template
 * to render different Modules (imported from 'src/modules').
 */
import { render } from "@faharmony/core";
import {
  getI18nInitOptions,
  Resource,
  ResourceLanguage,
  ResourceKey,
  initReactI18next,
  LanguageDetector,
  i18n,
} from "@faharmony/locale";
import {
  ModulesIdList,
  appActions,
  appIcon,
  appLanguages,
  appRoles,
  keycloakConfig,
  devMode,
} from "./config";
import PKG from "../package.json";

const version = PKG.version.split("-");
const versionName = " " + version[0] + (version[1] ? "-S" : "");

const appName =
  process.env.REACT_APP_NAME + versionName || "Harmony" + versionName;
const appShortName =
  process.env.REACT_APP_SHORT_NAME + versionName || "Harmony" + versionName;
const appDescription = process.env.REACT_APP_DESC || "Description";

const Modules = ModulesIdList.map((ModuleId) =>
  require(`./modules/${ModuleId}`).default()
);

const languageCodes = appLanguages || ["en"];
const moduleIds: string[] = ModulesIdList || [];
const resources: Resource = {};
languageCodes.forEach((languageCode: string) => {
  const resourceLang: ResourceLanguage = {};
  moduleIds.forEach((ModuleId: string) => {
    let translation = {};
    try {
      translation = require(`./modules/${ModuleId}/locale/${languageCode}.json`);
    } catch {
      console.warn(
        `Module (${ModuleId}) does not contain "${languageCode}" language file. 
        Check 'translations' folder in module directory.`
      );
    }
    const resourceKey: ResourceKey = translation;
    resourceLang[ModuleId] = resourceKey;
  });
  resources[languageCode] = resourceLang;
});

// Init i18n
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(getI18nInitOptions({ moduleIds, languageCodes, resources }));

// Render FA app
render({
  appConfig: {
    name: appName,
    shortName: appShortName,
    description: appDescription,
    languages: appLanguages,
    actions: appActions,
    roles: appRoles,
    icon: appIcon,
  },
  Modules,
  keycloakConfig,
  multilingual: i18n,
  devMode,
  _harmony: true,
});
