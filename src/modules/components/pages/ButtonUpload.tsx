import { PageView } from "@faharmony/views";
import { Box } from "@faharmony/theme";
import { ButtonUpload } from "@faharmony/components";

const Page = () => {
  return (
    <PageView heading="ButtonUpload" overflow="scroll">
      <Box direction="row">
        <Box direction="column">
          <ButtonUpload
            multiple={false}
            onFilesSelect={() => {
              console.log("test");
            }}
            uploadIcon={true}
          />

          <ButtonUpload
            value="upload multiple"
            multiple={true}
            onFilesSelect={() => {
              console.log("test");
            }}
            uploadIcon={true}
          />

          <ButtonUpload
            value="upload .pdf"
            accept=".pdf"
            multiple={false}
            onFilesSelect={() => {
              console.log("test");
            }}
            uploadIcon={true}
          />
        </Box>
        <Box direction="column">
          <ButtonUpload
            multiple={false}
            onFilesSelect={() => {
              console.log("test");
            }}
            uploadIcon={false}
          />

          <ButtonUpload
            value="Import multiple"
            multiple={true}
            onFilesSelect={() => {
              console.log("test");
            }}
            uploadIcon={false}
          />

          <ButtonUpload
            value="Import .pdf"
            accept=".pdf"
            multiple={false}
            onFilesSelect={() => {
              console.log("test");
            }}
            uploadIcon={false}
          />
        </Box>
      </Box>
    </PageView>
  );
};

export default Page;
