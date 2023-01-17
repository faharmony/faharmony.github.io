import React, { useEffect, useState, useMemo } from "react";
import { PageView } from "@faharmony/views";
import { ITableProps, Table } from "@faharmony/table";
import { useTimeout } from "@faharmony/helpers";
import { Tag } from "@faharmony/components";
import { faTerminal } from "@faharmony/icons";
import { forEach, isPlainObject, set } from "lodash";

interface IDataProps {
  name: string;
  lastName: string;
  age: number;
  category: string;
  country?: string;
  address1?: string;
  address2?: string;
  column1?: string;
  column2?: string;
  column3?: string;
  column4?: string;
  column5?: string;
}

const TableView = () => {
  const [showContent, setShowContent] = React.useState(false);
  useTimeout(() => setShowContent(true), 1000);

  const [time, setTime] = useState(new Date(Date.now()).toLocaleString());

  const tableData: IDataProps[] = React.useMemo(() => {
    let result = showContent
      ? [
          {
            name: "Siddhant",
            lastName: "Gupta",
            age: 25,
            category: "Developer",
            country: "India",
            defaultExpanded: false,
            address1: "First address",
            address2: "Second address",
            column1: "Column 1",
            column2: "Column 2",
            column3: "Column 3",
            column4: "Column 4",
            column5: "Column 5",
            currentTime: time,
            type: "mainRow",
            subRows: [
              {
                type: "subRow",
                name: "Shobhit",
                lastName: "Gupta",
                age: 28,
                category: "Developer",
                country: "New Delhi",
                address1: "Test address 1",
                address2: "Test address 2",
                column1: "Sub row 1",
                column2: "Sub row 2",
                column3: "Sub row 3",
                column4: "Sub row 4",
                column5: "Sub row 5",
              },
            ],
          },
          {
            name: "Scarlett",
            lastName: "Johansson",
            age: 36,
            category: "Actress",
            country: "USA",
            defaultExpanded: false,
            address1: "United States",
            address2: "Second address",
            column1: "Column 1",
            column2: "Column 2",
            column3: "Column 3",
            column4: "Column 4",
            column5: "Column 5",
            currentTime: time,
            type: "mainRow",
            subRows: [
              {
                name: "Chris",
                lastName: "Evans",
                age: 40,
                defaultExpanded: false,
                category: "Actor",
                country: "United States",
                address1: "Test address 1",
                address2: "NA",
                column1: "Sub row 1",
                column2: "Sub row 2",
                column3: "Sub row 3",
                column4: "Sub row 4",
                column5: "Sub row 5",
                type: "subRow",
                subRows: [
                  {
                    name: "Linus",
                    lastName: "Torvalds",
                    age: 51,
                    category: "Sr Developer",
                    country: "Finland",
                    address1: "Test address 1",
                    address2: "Test address 2",
                    column1: "Sub row 1",
                    column2: "Sub row 2",
                    column3: "Sub row 3",
                    column4: "Sub row 4",
                    column5: "Sub row 5",
                    type: "subSubRow",
                  },
                ],
              },
            ],
          },
          {
            name: "UnSelectable",
            lastName: "Test",
            age: 51,
            category: "Sr Developer",
            country: "Finland",
            address1: "Test address 1",
            address2: "Test address 2",
            column1: "Column 1",
            column2: "Column 2",
            column3: "Column 3",
            column4: "Column 4",
            column5: "Column 5",
            selectionDisabled: true,
          },
        ]
      : [];

    const addProperty = (obj: any, propName: string, propValue: Function) => {
      forEach(obj, (value) => {
        if (isPlainObject(value)) {
          set(value, propName, propValue());
          addProperty(value.subRows, propName, propValue);
        }
      });
    };

    addProperty(
      result,
      "percentage",
      () => Math.floor(Math.random() * 100) + " %"
    );

    return result;
  }, [showContent, time]);

  const tableColumns: any[] = React.useMemo(
    () => [
      {
        accessor: "name",
        Header: "Name",
        disableFilter: false,
      },
      {
        accessor: "lastName",
        Header: "Last Name",
        disableFilter: false,
      },
      {
        accessor: "category",
        Header: "category",
        disableFilter: true,
        Cell: ({ value }: any) => <Tag>{value}</Tag>,
      },
      {
        accessor: "age",
        Header: "Age",
        disableFilter: true,
        align: "right",
      },
      {
        accessor: "country",
        Header: "Country",
        disableFilter: true,
      },
      {
        accessor: "address1",
        Header: "Address 1",
        disableFilter: false,
      },
      {
        accessor: "address2",
        Header: "Address 2",
        disableFilter: true,
        align: "left",
      },
      {
        accessor: "column1",
        Header: "Column 1",
        disableFilter: true,
        align: "left",
      },
      {
        accessor: "column2",
        Header: "Column 2",
        disableFilter: true,
        align: "left",
      },
      {
        accessor: "column3",
        Header: "Column 3",
        disableFilter: true,
        align: "left",
      },
      {
        accessor: "column4",
        Header: "Column 4",
        disableFilter: true,
        align: "left",
      },
      {
        accessor: "column5",
        Header: "Column 5",
        disableFilter: true,
        align: "left",
      },
      {
        accessor: "currentTime",
        Header: "Time",
        disableFilter: true,
        align: "left",
      },
      {
        accessor: "percentage",
        Header: "Percentage",
        disableFilter: true,
        align: "right",
        // Cell: ({ value }: any) => (value ? value * 100 + " %" : "0 %"),
      },
    ],
    []
  );

  const handleRowClick = (rowObject: IDataProps) => console.log(rowObject);
  const handleRowDblClick = (rowObject: IDataProps) => alert(rowObject);

  const singleRowActions = (rowObject: IDataProps) => [
    {
      id: "log",
      icon: faTerminal,
      tooltip: "Log",
      onClick: () => console.log("hello", rowObject),
    },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      console.log("refreshing table ");
      setTime(new Date(Date.now()).toLocaleString());
    }, 60_000);

    return () => clearInterval(t);
  }, []);

  const columnVisibilitySelector: ITableProps<IDataProps>["columnVisibilitySelector"] =
    useMemo(
      () => ({
        title: "Change column visibility and order columns",
        actionButtonTooltip: "Select columns",
        handleChange: (hiddenColumnIds: string[]) =>
          console.log(hiddenColumnIds),
        handleVisibleColumns: (visibleColumnIds: string[]) =>
          console.log(visibleColumnIds),
        defaultHiddenColumnsIds: ["lastName"],
        defaultVisibleColumnsOrder: [
          "column1",
          "column2",
          "column3",
          "column4",
          "column5",
          "name",
          "age",
          "category",
          "country",
          "address1",
          "address2",
        ],
      }),
      []
    );

  return (
    // <PageView heading="Table">
    <Table
      tableHeading="Table"
      data={tableData}
      columns={tableColumns}
      headerAdditionalContent={
        <p>Here can be placed any optional react element</p>
      }
      defaultExpanded
      handleRowClick={handleRowClick}
      handleRowDblClick={handleRowDblClick}
      singleRowActions={singleRowActions}
      multipleRowActions={(selected) => [
        {
          id: "deleteMultiple",
          tooltip: "Print selected row to console",
          icon: faTerminal,
          onClick: () => console.log(selected),
        },
      ]}
      enableSorting
      enableFiltering
      disableSubRowSelect
      autoResetSortBy={false}
      enablePagination
      enableMultipleRowSelect
      columnVisibilitySelector={columnVisibilitySelector}
      exportTable={{
        fileTypes: "all",
        fileName: "Custom Exported File Name",
        exportButtonTooltip: "Export",
      }}
      isLoading={!showContent}
      key={showContent ? 1 : 0}
    />
    // </PageView>
  );
};

const Page = () => (
  <PageView heading="Table">
    <TableView />
  </PageView>
);

export default Page;
