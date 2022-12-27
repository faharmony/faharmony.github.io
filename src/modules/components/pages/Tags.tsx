import { PageView } from "@faharmony/views";
import { Tag, ITagProps, Divider } from "@faharmony/components";
import { Box } from "@faharmony/theme";
import { faTag, faMoneyBill } from "@faharmony/icons";

const Page = () => {
  const colors: ITagProps["color"][] = [
    "default",
    "negative",
    "positive",
    "warning",
    "info",
    "note",
    "secondary",
  ];
  return (
    <PageView heading="Tags">
      <Box direction="column">
        <Divider>No property</Divider>
        <Tag value={"Simple tag"} />
        <br />
        <Divider>Color property</Divider>
        {colors.map((color) => (
          <Tag
            color={color}
            value={color}
            key={color}
            onClose={() => {}}
            icon={faTag}
          />
        ))}
      </Box>

      <br />
      <Divider>With different icon and text sizes</Divider>
        <Tag
            value={"Eur"}
            valueVariant={"h3"}
            icon={faMoneyBill}
            iconSize={"lg"}
            autoHeight={true}
            color={"secondary"}
          />
    </PageView>
  );
};

export default Page;
