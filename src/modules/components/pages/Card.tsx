import React from "react";
import { Box, Theme } from "@faharmony/theme";
import { PageView } from "@faharmony/views";
import { Card, ICardProps } from "@faharmony/components";
import { faExclamationTriangle } from "@faharmony/icons";

const card: ICardProps = {
  heading: "Apple Inc.",
  body: "Market price date cannot be older than today.",
  icon: faExclamationTriangle,
  iconColor: Theme.colorTint("warning"),
};
const cards: ICardProps[] = Array(10).fill(card);

export default () => {
  return (
    <PageView heading="Card">
      <Box direction="column">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Box>
    </PageView>
  );
};
