import React from "react";
import { useLocale } from "@faharmony/locale";
import { PageView } from "@faharmony/views";
import { Text } from "@faharmony/components";
// import { importMDX } from "mdx.macro";
// import { MSXLoader } from "../components";

// const Content = lazy(() => importMDX("../docs/Welcome.mdx"));

/**
 * Default page of module
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const MainPage = () => {
  const t = useLocale();

  return (
    <PageView
      heading={t("moduleName")}
      overflow="auto"
      toolbarContent={
        <Text variant="h4">
          Harmony is FA Solutions' support library for React-app development
        </Text>
      }
    ></PageView>
  );
};
