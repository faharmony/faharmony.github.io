import React from "react";
import { PageView } from "@faharmony/views";
import { Table } from "@faharmony/table";
import { useTimeout } from "@faharmony/helpers";
import { Tag } from "@faharmony/components";
import { faTerminal } from "@faharmony/icons";

interface IDataProps {
  name: string;
  age: number;
  category: string;
}

const TableView = () => {
  const [showContent, setShowContent] = React.useState(false);
  useTimeout(() => setShowContent(true), 1000);

  const tableData: IDataProps[] = React.useMemo(
    () =>
      showContent
        ? [
            {
              name: "Siddhant Gupta",
              age: 25,
              category: "Developer",
              subRows: [
                {
                  name: "Shobhit Gupta",
                  age: 25,
                  category: "Developer",
                },
                { name: "Other person", age: 35, category: "Misc" },
              ],
            },
            {
              name: "Other person",
              age: 35,
              category: "Misc",
              subRows: [
                {
                  name: "Shobhit Gupta",
                  age: 25,
                  category: "Developer",
                },
                { name: "Other person", age: 35, category: "Misc" },
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
        Header: "Full name",
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
      onClick: () => console.log(rowObject),
    },
  ];

  return (
    // <PageView heading="Table">
    <Table<IDataProps>
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
      enableColumnVisibilitySelector
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
