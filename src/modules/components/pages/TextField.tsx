import { useState } from "react";
import { TextField, ITextFieldProps } from "@faharmony/form";
import { Divider, Text } from "@faharmony/components";
import { faHeart, faSearch } from "@faharmony/icons";
import { SMLType, Box } from "@faharmony/theme";
import { PageView } from "@faharmony/views";

const sizes: SMLType[] = ["sm", "md", "lg"];

const useTextFieldProps = () => {
  // State to store value from the input field
  const [clearableInputValue, setClearableInputValue] = useState<string>("");

  // Input Field handler
  const handleClearableUserInput = (event: any) => {
    setClearableInputValue(event.target.value);
  };

  // Reset Input Field handler
  const resetClearableInputField = () => {
    setClearableInputValue("");
  };

  const clearableInputProps: ITextFieldProps = {
    isClearable: true,
    onInputClear: resetClearableInputField,
    onChange: handleClearableUserInput,
    value: clearableInputValue,
    suffixIcon: faSearch,
  };

  const textFieldsProps: { [name: string]: ITextFieldProps } = {
    default: {},
    withText: { defaultValue: "Default text" },
    withPrefixIcon: { placeholder: "Favorite hobby", prefixIcon: faHeart },
    readOnly: { defaultValue: "Read only name", readOnly: true },
    disabled: { defaultValue: "Disabled text", disabled: true },
    successStatus: {
      success: true,
      defaultValue: "101.00",
      prefixText: "€",
    },
    errorStatus: {
      error: true,
      defaultValue: "101a",
      prefixText: "EUR",
    },
    loading: {
      isLoading: true,
      defaultValue: "Siddhant Gupta",
      suffixIcon: faHeart,
    },
  };

  return { textFieldsProps, clearableInputProps, clearableInputValue };
};

const Page = () => {
  const { textFieldsProps, clearableInputProps, clearableInputValue } =
    useTextFieldProps();
  return (
    <PageView heading="TextField" overflow="auto">
      <Box direction="column">
        <Box>
          <Text value="Type" truncate variant="h5" align="right" />
          <Text value="Small (sm)" truncate variant="h5" />
          <Text value="Medium (md, default)" truncate variant="h5" />
          <Text value="Large (lg)" truncate variant="h5" />
        </Box>
        {Object.entries(textFieldsProps).map(([name, o]) => (
          <Box key={name}>
            <Text truncate value={name} align="right" />
            {sizes.map((s) => (
              <TextField spacing={s} key={name + s} {...o} ref={null} />
            ))}
          </Box>
        ))}
        <Box>
          <Text value="Clearable field " truncate align="right" />
          <TextField
            spacing={"sm"}
            key={"clearableInput"}
            {...clearableInputProps}
            ref={null}
          />
          <Text truncate={true}>{JSON.stringify(clearableInputValue)}</Text>
          <Divider />
        </Box>
      </Box>
    </PageView>
  );
};

export default Page;
