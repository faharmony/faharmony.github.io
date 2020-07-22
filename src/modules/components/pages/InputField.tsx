import React from "react";
import { InputField, IInputFieldProps } from "@faharmony/form";
import { Box, Text } from "@faharmony/components";
import { faHeart } from "@faharmony/icons";
import { SMLType } from "@faharmony/theme";
import { PageView } from "@faharmony/views";

const sizes: SMLType[] = ["sm", "md", "lg"];

const options: { [name: string]: IInputFieldProps } = {
  default: {},
  withText: { defaultValue: "Default text" },
  withPrefixIcon: { placeholder: "Favorite hobby", prefixIcon: faHeart },
  readOnly: { defaultValue: "Read only name", readOnly: true },
  disabled: { defaultValue: "Disabled text", disabled: true },
  successStatus: {
    status: "success",
    defaultValue: "101.00",
    prefixText: "€",
  },
  errorStatus: {
    status: "error",
    defaultValue: "101a",
    prefixText: "€",
    statusTooltip: "Incorrect value.",
  },
  loading: { isLoading: true, defaultValue: "Siddhant Gupta" },
};

export default () => (
  <PageView heading="InputField">
    <Box direction="column">
      <Box>
        <Text value="Type" truncate variant="h5" align="right" />
        <Text value="Small (sm)" truncate variant="h5" />
        <Text value="Medium (md, default)" truncate variant="h5" />
        <Text value="Large (lg)" truncate variant="h5" />
      </Box>
      {Object.entries(options).map(([name, o]) => (
        <Box alignItems="start" key={name}>
          <Text truncate value={name} align="right" />
          {sizes.map((s) => (
            <InputField spacing={s} {...o} ref={null} key={name + s} />
          ))}
        </Box>
      ))}
    </Box>
  </PageView>
);
