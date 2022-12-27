import { PageView } from "@faharmony/views";
import { Help } from "@faharmony/components";

const HelpNode = () => {
  return (
    <PageView heading="Help">
        <Help text="This is tooltips text" />
    </PageView>
  );
};

export default HelpNode;