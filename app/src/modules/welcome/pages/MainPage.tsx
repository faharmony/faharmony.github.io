import React from "react";
import { useModule } from "@faharmony/module";
import { PageView } from "@faharmony/views";
import { Text, Button } from "@faharmony/components";
import { useDispatch, useSelector } from "@faharmony/state";
import { ModuleActions } from "../state";

const Redux = () => {
  const dispatch = useDispatch();
  const state: any = useSelector<any>((state) => state.welcome);
  console.log(state);
  return (
    <>
      <Text>{JSON.stringify(state)}</Text>
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
    </>
  );
};

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
    >
      <Redux />
    </PageView>
  );
};
