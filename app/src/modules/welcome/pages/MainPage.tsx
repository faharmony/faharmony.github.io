import React from "react";
import { useModule } from "@faharmony/module";
import { PageView } from "@faharmony/views";
import { Text, Button, Box, Preloader } from "@faharmony/components";
import { useDispatch, useSelector } from "@faharmony/state";
import { ModuleActions } from "../state";

const Redux = () => {
  const dispatch = useDispatch();
  const state: any = useSelector<any>((state) => state.welcome);
  return (
    <>
      <Box>
        <Text value="Loading: " />
        <Button
          value="Start"
          onClick={() => dispatch(ModuleActions.startLoading())}
        />
        <Button
          value="Stop"
          onClick={() => dispatch(ModuleActions.stopLoading())}
        />
        <Button
          value="Toggle"
          onClick={() => dispatch(ModuleActions.setLoading(!state.loading))}
        />
      </Box>
      {state.loading && <Preloader />}
    </>
  );
};

/**
 * Default page of module
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const MainPage = () => {
  const { t } = useModule();

  return (
    <PageView
      heading={t("moduleName")}
      toolbarContent={
        <Text variant="h4">
          Harmony is FA Solutions' framework for React-app development
        </Text>
      }
    >
      <Redux />
    </PageView>
  );
};
