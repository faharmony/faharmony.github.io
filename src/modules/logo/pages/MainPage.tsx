// {{Sample}}:MainView
import React from "react";
import { PageView, PrimaryWithSidebarLayout } from "@faharmony/views";
import { useLocale } from "@faharmony/locale";
import { Button, Box } from "@faharmony/components";
import { useLocation } from "@faharmony/router";
import { useModuleState, useDispatch } from "@faharmony/state";
import { IModuleState, ModuleActions } from "../state";
import { ConfigDrawer, Display } from "../components";

const PageActions = () => {
  const state = useModuleState<IModuleState>();
  const dispatch = useDispatch();
  return (
    <Box>
      <Button
        value="Configure logo"
        disabled={state.isConfigDrawerOpen}
        onClick={() => dispatch(ModuleActions.toggleConfigDrawer())}
      />
    </Box>
  );
};

const useSetState = (): void => {
  const dispatch = useDispatch();
  const search = new URLSearchParams(useLocation().search);
  search.delete("tab");
  if (search.toString()) {
    const jsonString =
      '"' +
      decodeURI(search.toString())
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"';
    const params = JSON.parse(`{${jsonString}}`);
    Object.entries(params).forEach(([key, val]: [string, any]) => {
      dispatch({ type: `logo/set${key}`, payload: decodeURIComponent(val) });
    });
  }
  dispatch(ModuleActions.setLoading(false));
};

/**
 * Default page of module
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const MainPage = () => {
  const t = useLocale();
  useSetState();
  return (
    <PageView heading={t("moduleName")} actions={<PageActions />}>
      <PrimaryWithSidebarLayout
        primaryNode={<Display />}
        secondaryNode={<ConfigDrawer />}
      />
    </PageView>
  );
};

export default MainPage;
