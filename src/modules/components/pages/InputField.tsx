import React from "react";
import { Form, InputField, IInputFieldProps } from "@faharmony/form";
import { Box } from "@faharmony/components";
import { faHeart } from "@faharmony/icons";
import { SMLType } from "@faharmony/theme";

const sizes: SMLType[] = ["xs", "sm", "md", "lg", "xl"];

const options: IInputFieldProps[] = [
  {},
  { defaultValue: "Default text" },
  { placeholder: "Favorite hobby", prefixIcon: faHeart },
  { defaultValue: "Read only name", readOnly: true },
  { defaultValue: "Disabled text", disabled: true },
  { status: "success", defaultValue: "101.00", prefixText: "€" },
  {
    status: "error",
    defaultValue: "101a",
    prefixText: "€",
    statusTooltip: "Incorrect value.",
  },
  { isLoading: true, defaultValue: "Siddhant Gupta" },
];

export default () => (
  <Form
    style={{
      padding: "16px",
    }}
  >
    <Box direction="column">
      {options.map((o) => (
        <Box alignItems="start">
          {sizes.map((s) => (
            <InputField spacing={s} {...o} ref={null} />
          ))}
        </Box>
      ))}
    </Box>
  </Form>
);
