/** i18n-ally useTranslation("welcome") */
import React from "react";

import { useModule } from "@faharmony/module";
import { PageView, SummaryView } from "@faharmony/views";
import { useTabs } from "@faharmony/navigation";
import { Box } from "@faharmony/theme";
import { Text, Button, RingLoader } from "@faharmony/components";
import { useDispatch, useModuleState } from "@faharmony/state";
import { ModuleActions, IState } from "../state";

const Redux = () => {
  const { t } = useModule();
  const dispatch = useDispatch();
  const state = useModuleState<IState>();
  return (
    <Box justifyContent="flex-start">
      <Box width="auto">
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
      {state.loading && <RingLoader />}
      <Text value={t("loading")} />
    </Box>
  );
};

// const ApolloRest = () => {
//   const query = gql`
//     query Roles {
//       groups @rest(type: "Group", path: "groups", endpoint: "keycloak") {
//         id
//         name
//         realmRoles
//         clientRoles
//         subGroups
//         attributes
//       }
//     }
//   `;
//   const { data, loading, error } = useQuery(query);
//   console.dir(data);
//   return (
//     <div>
//       {loading
//         ? "Loading..."
//         : error
//         ? "Error"
//         : JSON.stringify(data.groups, null, 2)}
//     </div>
//   );
// };

/**
 * Default page of module
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const MainPage = () => {
  const { t } = useModule();

  const { TabBar, TabPanel } = useTabs([
    { id: "1", label: "Tab1 is great ", content: <Redux /> },
    {
      id: "2",
      label: "I love this Tab2 so much",
      disabled: true,
      content: <div>2</div>,
    },
    { id: "3", label: "Tab3", content: <div>3</div> },
  ]);

  return (
    <Box justifyContent="auto">
      <PageView
        heading={t("moduleName")}
        toolbarContent={
          <TabBar />
          // <Text variant="h4">
          //   Harmony is FA Solutions' framework for React-app development
          // </Text>
        }
      >
        <TabBar />
        <TabPanel />
      </PageView>
      <div style={{ height: "100vh", width: "100%" }}>
        <SummaryView caption="test" heading="Tabs" onClose={() => {}}>
          <TabPanel />
        </SummaryView>
      </div>
    </Box>
  );
};
