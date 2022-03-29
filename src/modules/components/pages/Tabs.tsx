import { Center } from "@faharmony/theme";
import { PageView } from "@faharmony/views";
import { ITabsProps } from "@faharmony/navigation";

const tabs: ITabsProps[] = ["Very very long tab name", "B", "C", "D"].map(
  (id, index) => ({
    id,
    label: `Tab ${id}`,
    defaultActive: index === 0,
    content: <Center>Content {id}</Center>,
    onActive: () => console.log(1),
    disabled: index === 2,
  })
);

const Page = () => {
  return <PageView heading="Tabs" tabs={tabs} />;
};

export default Page;
