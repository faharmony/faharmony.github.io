import { PageView } from "@faharmony/views";
import { Icon, Tooltip } from "@faharmony/components";
import * as icons from "@faharmony/icons";
import * as solidIcons from "@faharmony/icons/solid";
import { memo, useMemo, useState, useRef, useLayoutEffect } from "react";
import { Box } from "@faharmony/theme";
import { ITabsProps } from "@faharmony/navigation";
import { FixedSizeList as List, areEqual } from "react-window";
import { TextField } from "@faharmony/form";

const Page = () => {
  const tabs: ITabsProps[] = ["Regular", "Solid"].map((id, index) => ({
    id,
    label: `${id}`,
    defaultActive: index === 0,
    content: <Icons type={id}></Icons>,
  }));

  return (
    <PageView heading="Icons" overflow="scroll" tabs={[...tabs]}></PageView>
  );
};

const Icons = (props: { type: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const iconLists = props.type === "Regular" ? icons : solidIcons;
  const [filter, setFilter] = useState("");
  const iconRows = useMemo(() => {
    return Object.keys(iconLists)
      .filter(
        (iconName) =>
          typeof iconLists[iconName] !== "function" &&
          iconLists[iconName] !== undefined &&
          (iconName.match("IconDefinition") || iconName.match("fa")) &&
          (filter === undefined ||
            filter.trim() === "" ||
            iconName.toLowerCase().match(filter.toLocaleLowerCase()))
      )
      .reduce((resultArray, icon, index) => {
        const chunkIndex = Math.floor(index / 12);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(icon);
        return resultArray;
      }, [] as string[][]);
  }, [iconLists, filter]);

  const IconRow = memo(
    (props: { data: string[][]; index: number; style: any }) => {
      return (
        <Box
          direction="row"
          style={{
            ...props.style,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {props.data[props.index].map((iconName) => {
            const icon = iconLists[iconName];
            return (
              <Tooltip
                key={iconName}
                value={iconName.replace("IconDefinition", "")}
              >
                <Box style={{ marginRight: 75, width: "auto" }}>
                  <Icon icon={icon}></Icon>
                </Box>
              </Tooltip>
            );
          })}
        </Box>
      );
    },
    areEqual
  );

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref?.current?.parentElement?.offsetHeight || 800);
  }, [ref?.current?.parentElement?.offsetHeight]);

  return (
    <Box direction="column" ref={ref} style={{ height: "100%" }}>
      <Box width={10}>
        <TextField
          placeholder="Search"
          value={filter}
          onChange={(e) => {
            setFilter(e.currentTarget.value);
          }}
          isClearable={true}
          suffixIcon={icons.faSearch}
        ></TextField>
      </Box>
      <List
        height={height}
        itemCount={iconRows.length}
        itemData={iconRows}
        itemSize={35}
        width={"99%"}
      >
        {IconRow}
      </List>
    </Box>
  );
};

export default Page;
