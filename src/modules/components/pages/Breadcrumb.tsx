import React from "react";
import { PageView } from "@faharmony/views";
import { Breadcrumbs, IBreadcrumb } from "@faharmony/router";
import { faFolder, faFile } from "@faharmony/icons";

export default () => {
  const onClick = () => {};
  const crumbs: IBreadcrumb[] = [
    {
      id: "root",
      label: "Root",
      onClick,
    },
    {
      id: "folder",
      label: "Folder",
      icon: faFolder,
      onClick,
    },
    {
      id: "file",
      label: "File",
      icon: faFile,
    },
  ];
  return (
    <PageView
      heading="Breadcrumbs"
      toolbarContent={<Breadcrumbs crumbs={[...crumbs, ...crumbs]} />}
    />
  );
};
