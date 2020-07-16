import React from "react";
import { Menu, IMenuPrimaryItem } from "@faharmony/router";
import { IIconButtonObject } from "@faharmony/components";
import { faPlus, faSync } from "@faharmony/icons";

export default () => {
  const [selectedId, setSelectedId] = React.useState<string>("");

  const actions: IIconButtonObject[] = [
    {
      id: "addItem",
      icon: faPlus,
      tooltip: "Add item",
      onClick: () => console.log("Item added"),
    },
    {
      id: "refresh",
      icon: faSync,
      tooltip: "Refresh",
      onClick: () => console.log("Refreshed"),
    },
  ];

  const menu: IMenuPrimaryItem[] = React.useMemo(
    () => [
      {
        id: "item1",
        label: "Item 1",
        handleClick: () => setSelectedId("item1"),
        isSelectedCallback: () => selectedId === "item1",
        subItems: [
          {
            id: "subItemA",
            label: "SubItem A",
            handleClick: () => setSelectedId("subItemA"),
            isSelectedCallback: () => selectedId === "subItemA",
          },
          {
            id: "subItemB",
            label: "SubItem B",
            handleClick: () => setSelectedId("subItemB"),
            isSelectedCallback: () => selectedId === "subItemB",
          },
        ],
      },
      {
        id: "item2",
        label: "Item 2",
        handleClick: () => setSelectedId("item2"),
        isSelectedCallback: () => selectedId === "item2",
      },
    ],
    [selectedId]
  );

  return (
    <Menu
      heading="Application Name"
      shortHeading="App"
      menu={menu}
      actions={actions}
    />
  );
};
