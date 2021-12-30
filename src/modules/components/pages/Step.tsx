import { PageView } from "@faharmony/views";
import { Box } from "@faharmony/theme";
import { Step } from "@faharmony/navigation";

const Page = () => {
  return (
    <PageView heading="Steps">
      <Box style={{ width: "300px" }} direction="column">
        <Step label="Step 1" completed={true} state={"active"}></Step>

        <Step label="Step 2" completed={false} state={"active"}></Step>

        <Step label="Step 3" completed={false} state={"disabled"}></Step>

        <Step label="Step 4" completed={true} state={"disabled"}></Step>

        <Step label="Step 5" completed={false} state={"inactive"}></Step>

        <Step label="Step 6" completed={true} state={"inactive"}></Step>
      </Box>
    </PageView>
  );
};

export default Page;
