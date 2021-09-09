import { Box, theme } from "@faharmony/theme";
import { PageView } from "@faharmony/views";
import { Card, ICardProps } from "@faharmony/components";
import { faExclamationTriangle } from "@faharmony/icons";

const card: ICardProps = {
  heading: "Apple Inc.",
  body: "Market price date cannot be older than today.",
  icon: faExclamationTriangle,
  iconColor: theme.color.text.warning,
};
const cards: ICardProps[] = Array(10).fill(card);

const Page = () => (
  <PageView heading="Card">
    <Box direction="column">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Box>
  </PageView>
);

export default Page;
