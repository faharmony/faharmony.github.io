import React from "react";
import { PageView, SummaryView } from "@faharmony/views";
import { Button, Tag } from "@faharmony/components";

const code = `// Example
<SummaryView
  caption="Fund"
  heading="FA Equity +"
  onClose={handleClose}
  headingSuffix={<Tag value="Calculated" color="info" />}
>
  {content}
</SummaryView>
`;

export default () => {
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
        >
          <pre>{code}</pre>
        </SummaryView>
      )}
    </PageView>
  );
};
