import { PageView } from "@faharmony/views";
import { InfoBox, IInfoBoxProps } from "@faharmony/components";
import { Box } from "@faharmony/theme";

const Page = () => {
  const colors: IInfoBoxProps["color"][] = [
    "negative",
    "positive",
    "warning",
    "info",
    "note",
    "secondary",
  ];
  return (
    <PageView heading="Info Box">
      <Box direction="column">
        {colors.map((color) => (
          <InfoBox
            field="InfoBox Title"
            helpText={`Infobox help`}
            color={color}
            value="Simple Information box content. It can be a jsx element as  well "
          ></InfoBox>
        ))}
      </Box>
    </PageView>
  );
};

export default Page;
