import { PageView } from "@faharmony/views";
import { Editor } from "@faharmony/editor";

const Page = () => (
  <PageView heading="Editor">
    <Editor language="typescript" />
  </PageView>
);

export default Page;
