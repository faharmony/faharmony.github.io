import React from "react";
import { useModule } from "@faharmony/module";
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
  const t = useModule().t;

  return (
    <PageView
      heading={t("moduleName")}
      overflow="auto"
      toolbarContent={
        <Text variant="h4">
          Harmony is FA Solutions' framework for React-app development
        </Text>
      }
    ></PageView>
  );
};
