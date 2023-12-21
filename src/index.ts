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

// import { render } from "react-dom";

// render(<div>SIDDHANT</div>, document.getElementById("root"));

import { render, IAppConfig } from "@faharmony/core";
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
  enableNavigationFilter,
} from "./config";

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

const appConfig: IAppConfig = {
  name: process.env.REACT_APP_NAME || "App",
  version: process.env.REACT_APP_VERSION || "1.0.0",
  shortName: process.env.REACT_APP_SHORT_NAME,
  description: process.env.REACT_APP_DESC,
  languages: appLanguages,
  actions: appActions,
  roles: appRoles,
  icon: appIcon,
  hideGlobalBar: true,
  hideModuleNavigation: false,
};

(async () => {
  const Modules = [];
  for (const ModuleId of ModulesIdList) {
    Modules.push((await import(`./modules/${ModuleId}`)).default);
  }
  // Render FA app
  render({
    appConfig,
    Modules,
    keycloakConfig,
    multilingual: i18n,
    devMode,
    enableNavigationFilter,
    _harmony: true,
  });
})();
