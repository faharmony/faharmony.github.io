import React from "react";
import { PageView } from "@faharmony/views";
import { Accordion, IAccordionPanelProps } from "@faharmony/components";

const Panel = () => <div> Panel content </div>;

const panels: IAccordionPanelProps[] = [
  {
    id: "panel1",
    heading: "Panel 1",
    content: <Panel />,
  },
  {
    id: "panel2",
    heading: "Panel 2",
    defaultActive: true,
    content: <div> Hello World </div>,
  },
  {
    id: "panel3",
    heading: "Panel 3",
    content: <div> Hello Universe </div>,
  },
];

export default () => (
  <PageView heading="Accordion">
    <Accordion panels={panels} />
  </PageView>
);
