import { PageView } from "@faharmony/views";
import { Box } from "@faharmony/theme";
import { MenuDrilldown } from "@faharmony/shared";
import { StartWorkflowButtonPopover } from "@faharmony/taskmanager";
import { useState } from "react";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  return (
    <PageView heading="Menu Drilldown" overflow="scroll">
      <Box direction="column">
        <div style={{ width: 300, height: 340 }}>
          <StartWorkflowButtonPopover />
          <MenuDrilldown
            enableFiltering
            optionsTree={{
              label: "Groupings",
              options: Object.values(groupingOptions).map(
                ({ groupBy, label, key }) => {
                  const hasSubOptions = groupingsWithSubOptions.includes(key);

                  return {
                    label,
                    payload: {
                      tableHeader: label,
                      groupCode: "",
                      groupBy,
                    },
                    options:
                      hasSubOptions &&
                      userPrefsGroupCodes?.map(({ code: groupCode, name }) => ({
                        label: `${name} (${groupCode})`,
                        payload: {
                          tableHeader: `${label} (${name})`,
                          groupBy,
                          groupCode,
                        },
                      })),
                  };
                }
              ),
            }}
            onOptionSelected={(option) => {
              setSelectedOption(option);
              console.log(option);
            }}
          />
        </div>
        <div
          style={{
            whiteSpace: "pre",
          }}
        >
          <div style={{ zoom: 1.4 }}>
            <strong>Selected option</strong> -{" "}
            {JSON.stringify(selectedOption.at(-1), null, 4)?.replaceAll(
              '"',
              ""
            )}
          </div>
          <br />
          <br />
          <br />
          <strong>Returned array of selected options</strong> -{" "}
          {JSON.stringify(selectedOption, null, 4)?.replaceAll('"', "")}
        </div>
      </Box>
    </PageView>
  );
};

export default Page;

const groupingsWithSubOptions = [
  "groupAndSector",
  "groupAndPortfolio",
  "portfolioAndGroup",
];

const groupingOptions = {
  groupAndSector: {
    key: "groupAndSector",
    groupBy: ["GROUP", "SECTOR", "SECURITY"],
    label: "Asset type and class",
  },
  groupAndPortfolio: {
    key: "groupAndPortfolio",
    groupBy: ["GROUP", "PORTFOLIO", "SECTOR"],
    label: "Asset type and portfolio",
  },
  securityType: {
    key: "securityType",
    groupBy: ["TYPE", "SECURITY"],
    label: "Security type",
  },
  subType: {
    key: "subType",
    groupBy: ["TYPE", "SUBTYPE", "SECURITY"],
    label: "Security type and subtype",
  },
  security: {
    key: "security",
    groupBy: ["SECURITY"],
    label: "Security",
  },
  class1: {
    key: "class1",
    groupBy: ["CLASS1", "SECURITY"],
    label: "Class 1",
  },
  class2: {
    key: "class2",
    groupBy: ["CLASS2", "SECURITY"],
    label: "Class 2",
  },
  class3: {
    key: "class3",
    groupBy: ["CLASS3", "SECURITY"],
    label: "Class 3",
  },
  class4: {
    key: "class4",
    groupBy: ["CLASS4", "SECURITY"],
    label: "Class 4",
  },
  class5: {
    key: "class5",
    groupBy: ["CLASS5", "SECURITY"],
    label: "Class 5",
  },
  country: {
    key: "country",
    groupBy: ["COUNTRY", "SECURITY"],
    label: "Country",
  },
  marketPlace: {
    key: "marketPlace",
    groupBy: ["MARKETPLACE", "SECURITY"],
    label: "Market place",
  },
  currency: {
    key: "currency",
    groupBy: ["CURRENCY", "SECURITY"],
    label: "Currency",
  },
  portfolio: {
    key: "portfolio",
    groupBy: ["PORTFOLIO", "TYPE", "SECURITY"],
    label: "Portfolio",
  },
  portfolioAndSubPortfolio: {
    key: "portfolioAndSubPortfolio",
    groupBy: ["PORTFOLIO", "PORTFOLIO_ALL", "SECURITY"],
    label: "Portfolio and sub portfolio",
  },
  portfolioAndGroup: {
    key: "portfolioAndGroup",
    groupBy: ["PORTFOLIO", "GROUP", "SECTOR"],
    label: "Portfolio and asset type",
  },
  issuer: {
    key: "issuer",
    groupBy: ["ISSUER", "SECURITY"],
    label: "Issuer",
  },
};

const userPrefsGroupCodes = [
  {
    name: "Asset class",
    code: "ASSET",
  },
  {
    name: "Geographical",
    code: "GEO",
  },
  {
    name: "Industry",
    code: "IND",
  },
  {
    name: "Strategy",
    code: "Strategy",
  },
  {
    name: "Robo class",
    code: "ROBO",
  },
  {
    name: "Currency",
    code: "CURRENCY",
  },
  {
    name: "Country exposure",
    code: "COUNTRY",
  },
  {
    name: "AIF Geo",
    code: "AIFGEO",
  },
  {
    name: "AIF Asset",
    code: "AIFASSET",
  },
  {
    name: "AIF Asset Turnover",
    code: "AIFASSETTURNOVER",
  },
  {
    name: "AIF Strategies",
    code: "AIFSTRATEGIES",
  },
  {
    name: "Model",
    code: "MOD",
  },
  {
    name: "Test ST",
    code: "TEST_ST",
  },
  {
    name: "Jv strategy test",
    code: "JV_TEST",
  },
  {
    name: "INT Asset Structure",
    code: "INT_AS",
  },
];
