/** i18n-ally useTranslation("welcome") */
import React from "react";
import { useModule } from "@faharmony/module";
import { PageView } from "@faharmony/views";
import { Text, Button, Box, RingLoader } from "@faharmony/components";
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
      {/* <ApolloRest /> */}
    </PageView>
  );
};
