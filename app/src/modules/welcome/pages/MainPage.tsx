import React from "react";
import { useModule } from "@faharmony/module";
import { PageView } from "@faharmony/views";
import { Text, Button, Box, Icon } from "@faharmony/components";
import { useDispatch, useModuleState } from "@faharmony/state";
import { faSpinner } from "@faharmony/icons";
import { ModuleActions, IState } from "../state";

const Redux = () => {
  const { t } = useModule();
  const dispatch = useDispatch();
  // const state = useSelector<any>((state) => state.welcome) as IState;
  const state = useModuleState<IState>();
  return (
    <Box>
      <Text value={t("loading")} />
      <Icon spin={state.loading} icon={faSpinner} />
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
