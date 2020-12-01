import React from "react";
import { PageView } from "@faharmony/views";
import { GraphiQL } from "@faharmony/editor";

const Page = () => (
  <PageView heading="GraphiQl">
    <GraphiQL enableExplorer={false} />
  </PageView>
);

export default Page;
