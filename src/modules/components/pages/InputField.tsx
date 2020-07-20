import React from "react";
import { Form, InputField } from "@faharmony/form";
import { Box } from "@faharmony/components";
import { faCheckSquare } from "@faharmony/icons";

export default () => (
  <Form
    style={{
      padding: "16px",
    }}
  >
    <Box>
      <Box direction="column">
        <InputField
          onChange={(e) => console.log(e.target.value)}
          defaultValue="Hello"
          placeholder="Lol"
          spacing="sm"
          prefixText="USD"
        />
        <InputField
          onChange={(e) => console.log(e.target.value)}
          defaultValue="isClearable ? inputFieldWithClear : inputField;isClearable ? inputFieldWithClear : inputField;"
          placeholder="Lol"
          prefixIcon={faCheckSquare}
          // disabled
        />
        <InputField
          onChange={(e) => console.log(e.target.value)}
          defaultValue="Hello"
          placeholder="Lol"
          spacing="lg"
          prefixText="Sexy bitch"
        />
        <InputField prefixText="$" disabled />
        <InputField prefixText="$" readOnly />
      </Box>
      <Box direction="column">
        <InputField prefixText="$" />
        <InputField prefixText="€" />
        <InputField prefixText="I" />
        <InputField prefixText="R" />
        <InputField prefixIcon={faCheckSquare} />
      </Box>
    </Box>
  </Form>
);
