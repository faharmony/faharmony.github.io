import React from "react";
import { NumberField, INumberFieldProps } from "@faharmony/form";
import { Box } from "@faharmony/components";
import { Text } from "@faharmony/components";
import { faHeart } from "@faharmony/icons";
import { SMLType } from "@faharmony/theme";
import { PageView } from "@faharmony/views";

const sizes: SMLType[] = ["sm", "md", "lg"];

const options: { [name: string]: INumberFieldProps } = {
  default: {},
  withText: { defaultValue: 123.234034 },
  withPrefixIcon: { placeholder: "Favorite hobby", prefixIcon: faHeart },
  readOnly: { defaultValue: 123.123123, readOnly: true },
  disabled: { defaultValue: 235.64465, disabled: true },
  successStatus: {
    success: true,
    defaultValue: 101.0,
    prefixText: "€",
  },
  errorStatus: {
    error: true,
    defaultValue: 101,
    prefixText: "EUR",
  },
};

export default () => {
  return (
    <PageView heading="TextField" overflow="auto">
      <Box direction="column">
        <Box justifyContent="space-evenly">
          <Text value="Type" truncate variant="h5" align="right" />
          <Text value="Small (sm)" truncate variant="h5" />
          <Text value="Medium (md, default)" truncate variant="h5" />
          <Text value="Large (lg)" truncate variant="h5" />
        </Box>
        {Object.entries(options).map(([name, o]) => (
          <Box key={name} justifyContent="space-evenly" width="100%">
            <Text truncate value={name} align="right" />
            {sizes.map((s) => (
              <NumberField spacing={s} key={name + s} {...o} ref={null} />
            ))}
          </Box>
        ))}
      </Box>
    </PageView>
  );
};
