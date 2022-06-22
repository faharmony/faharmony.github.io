import { PageView } from "@faharmony/views";
import {
  Tooltip,
  Divider,
  Text,
  Card,
  ICardProps,
} from "@faharmony/components";
import { Box, theme } from "@faharmony/theme";
import { faExclamationTriangle } from "@fortawesome/pro-regular-svg-icons";

const Page = () => {
  const card: ICardProps = {
    heading: "Apple Inc.",
    body: "Market price date cannot be older than today.",
    icon: faExclamationTriangle,
    iconColor: theme.color.text.warning,
  };

  return (
    <PageView heading="Tooltip">
      <Box direction="column">
        <Box width={"auto"}>
          <Tooltip value="Test tooltip, this is simple string">
            <Text>Tooltip with text, hover to test</Text>
          </Tooltip>
        </Box>
        <Divider></Divider>
        <Box width={"auto"}>
          <Tooltip value={<Card {...card} />}>
            <Text>Tooltip with custom component, hover to test</Text>
          </Tooltip>
        </Box>
        <Divider></Divider>
        <Box width={"auto"}>
          <Tooltip value="https://bitbucket.org/fasolutions-ondemand/faharmony/src/develop/packages/components/src/Tooltip/index.tsx">
            <Text value="Test tooltip with url"></Text>
          </Tooltip>
        </Box>
        <Divider></Divider>
        <Box width={"auto"}>
          <Tooltip
            value={
              <a href="https://bitbucket.org/fasolutions-ondemand/faharmony/src/develop/packages/components/src/Tooltip/index.tsx">
                Link to tooltip repo
              </a>
            }
            interactive={true}
          >
            <Text value="Interactive tooltip"></Text>
          </Tooltip>
        </Box>
      </Box>
    </PageView>
  );
};

export default Page;
