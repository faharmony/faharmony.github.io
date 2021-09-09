import { PageView } from "@faharmony/views";
import { Breadcrumbs, IBreadcrumb } from "@faharmony/navigation";
import { faFolder, faFile } from "@faharmony/icons";

const Page = () => {
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

export default Page;
