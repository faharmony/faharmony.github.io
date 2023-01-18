import React from "react";
import { PageView, SummaryView } from "@faharmony/views";
import { Button, InfoBox, Tag } from "@faharmony/components";
import { Box } from "@faharmony/theme";

const code = `// Example
<SummaryView
  caption="Fund"
  heading="FA Equity +"
  onClose={handleClose}
  headingSuffix={<Tag value="Calculated" color="info" />}
  captionSuffix={<Tag value="Optional caption suffix" color="secondary" />}
  additionalContent={<p>Here can be placed any optional react element</p>}
>
  {content}
</SummaryView>
`;

const Page = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <PageView
      caption="Components"
      heading="SummaryView"
      actions={
        <Button
          value="Open SummaryView"
          onClick={() => setOpen(true)}
          disabled={open}
        />
      }
    >
      {open && (
        <SummaryView
          caption="Fund"
          heading="FA Equity +"
          onClose={() => setOpen(false)}
          headingSuffix={<Tag value="Calculated" color="info" />}
          captionSuffix={
            <Tag value="Optional caption suffix" color="secondary" />
          }
          additionalContent={
            <Box direction="column">
              <p>Here can be placed any optional react element</p>
              <Box spacing="xl" wrap="wrap">
                <Box width={"auto"} direction="column">
                  <InfoBox field="Info">Hello World!</InfoBox>
                </Box>
                <Box width={"auto"} direction="column">
                  <InfoBox field="Info">Hello World!</InfoBox>
                </Box>
                <Box width={"auto"} direction="column">
                  <InfoBox field="Info">Hello World!</InfoBox>
                </Box>
                <Box width={"auto"} direction="column">
                  <InfoBox field="Info">Hello World!</InfoBox>
                </Box>
                <Box width={"auto"} direction="column">
                  <InfoBox field="Info">Hello World!</InfoBox>
                </Box>
                <Box width={"auto"} direction="column">
                  <InfoBox field="Info">Hello World!</InfoBox>
                </Box>
              </Box>
            </Box>
          }
          additionalContentExpandedByDefault
          additionalContentToggleButtonEnabled
        >
          <pre>{code}</pre>
        </SummaryView>
      )}
    </PageView>
  );
};

export default Page;
