import { useRouteMatch, Route, useHistory } from "@faharmony/router";
import React from "react";
import { CustomPage, CustomPageList } from "../../welcome/pages/Routes";
import { PageView } from "@faharmony/views";
import { Button, Text } from "@faharmony/components";
import { Box } from "@faharmony/theme";

const Page = () => {
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
        <SubModulePage />;
      </Route>
    </React.Fragment>
  );
};

export default Page;

// import { importMDX } from "mdx.macro";
// import { MSXLoader } from "../components";

// const Content = lazy(() => importMDX("../docs/Welcome.mdx"));

/**
 * Default page of module
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const SubModulePage = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <PageView
      heading={"Submodule landing page"}
      overflow="auto"
      toolbarContent={<Text variant="h4">This is submodule landing page</Text>}
    >
      {" "}
      <Box>
        <Button
          value={"Open custom path"}
          onClick={() => history.push(path + "/pages")}
        ></Button>
      </Box>
    </PageView>
  );
};
