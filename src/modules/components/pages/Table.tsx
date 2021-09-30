import React from "react";
import { PageView } from "@faharmony/views";
import { Table } from "@faharmony/table";
import { useTimeout } from "@faharmony/helpers";
import { Tag } from "@faharmony/components";
import { faTerminal } from "@faharmony/icons";

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

  const tableData: IDataProps[] = React.useMemo(
    () =>
      showContent
        ? [
            {
              name: "Siddhant",
              lastName: "Gupta",
              age: 25,
              category: "Developer",
              country: "India",
              address1: "First address",
              address2: "Second address",
              column1: "Column 1",
              column2: "Column 2",
              column3: "Column 3",
              column4: "Column 4",
              column5: "Column 5",
              subRows: [
                {
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
                },
              ],
            },
            {
              name: "Scarlett",
              lastName: "Johansson",
              age: 36,
              category: "Actress",
              country: "USA",
              address1: "United States",
              address2: "Second address",
              column1: "Column 1",
              column2: "Column 2",
              column3: "Column 3",
              column4: "Column 4",
              column5: "Column 5",
              subRows: [
                {
                  name: "Chris",
                  lastName: "Evans",
                  age: 40,
                  category: "Actor",
                  country: "United States",
                  address1: "Test address 1",
                  address2: "NA",
                  column1: "Sub row 1",
                  column2: "Sub row 2",
                  column3: "Sub row 3",
                  column4: "Sub row 4",
                  column5: "Sub row 5",
                },
              ],
            },
          ]
        : [],
    [showContent]
  );

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
        Header: "Category",
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

  return (
    // <PageView heading="Table">
    <Table
      tableHeading="Table"
      data={tableData}
      columns={tableColumns}
      handleRowClick={handleRowClick}
      handleRowDblClick={handleRowDblClick}
      singleRowActions={singleRowActions}
      enableSorting
      enableFiltering
      enablePagination
      enableMultipleRowSelect
      columnVisibilitySelector={{
        handleVisibleColumns: (visibleColumnIds) =>
          console.log(visibleColumnIds),
        defaultHiddenColumnsIds: ["lastName"],
      }}
      exportTable
      isLoading={!showContent}
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
