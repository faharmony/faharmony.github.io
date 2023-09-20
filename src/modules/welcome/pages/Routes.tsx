// formio:MainPage
/** i18n-ally useTranslation("formio") */
import { Button } from "@faharmony/components";
// Embed form builder here https://github.com/formio/react-formio#formbuilder
// api:MainPage
/** i18n-ally useTranslation("api") */

import { Route, useHistory, useRouteMatch, useParams } from "@faharmony/router";
import React from "react";
import { MainPage } from "./MainPage";
import { Box } from "@faharmony/theme";
/**
 * Default page of module
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const Routes = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <Route exact path={path + "/pages"} key={"test"}>
        <CustomPageList />
      </Route>
      <Route exact path={path + "/pages/:id"} key={"pageId"}>
        <CustomPage />
      </Route>
      {/* Default */}
      <Route exact path={path}>
        <MainPage />;
      </Route>
    </React.Fragment>
  );
};

export default Routes;

export const CustomPageList = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <Box direction="column">
      <Button value={"Back"} onClick={() => history.goBack()}></Button>
      <Box justifyContent="flex-start">
        <Box width="auto" direction="column">
          <Button
            value={"Page 1"}
            onClick={() => history.push(path + "/page1")}
          ></Button>
          <Button
            value={"Page 2"}
            onClick={() => history.push(path + "/page2")}
          ></Button>
        </Box>
      </Box>
    </Box>
  );
};

export const CustomPage = () => {
  let { id } = useParams<{ id: string }>();
  const history = useHistory();
  return (
    <Box direction="column">
      <Button value={"Back"} onClick={() => history.goBack()}></Button>
      <Box justifyContent="flex-start"> {`This is page ${id}`}</Box>
    </Box>
  );
};
