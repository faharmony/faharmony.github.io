import React from "react";
import {
  Form,
  useForm,
  resetFormValues,
  FormValuesWatcher,
  DatePicker,
  FormControl,
  Toggle,
  NumberField,
} from "@faharmony/form";
import { Box, Button, Divider } from "@faharmony/components";
import { PageView } from "@faharmony/views";

type FormInputs = {
  date: Date;
  toggle: boolean;
  number: number;
};

const defaultValues: Partial<FormInputs> = {
  date: new Date("2020-09-20"),
  toggle: true,
  number: 1343400.234,
};

const FormNode = () => {
  const formMethods = useForm<FormInputs>({
    defaultValues,
    criteriaMode: "all",
  });
  const { control, handleSubmit, register } = formMethods;

  const onSubmit = handleSubmit(console.log);
  return (
    <Form formMethods={formMethods} style={{ width: "100%" }} direction="row">
      <Box direction="column" width={"260px"} alignItems="start">
        <FormControl label="Date">
          <DatePicker name="date" />
        </FormControl>
        <FormControl label="Toggle">
          <Toggle name="toggle" ref={register} label="Hello world" />
        </FormControl>
        <Toggle disabled />
        <FormControl label="NumberField">
          <NumberField name="number" ref={register} prefixText="EUR" />
        </FormControl>
        <Divider />
        <Box justifyContent="space-between">
          <Box width="auto">
            <Button
              value="Reset"
              variant="secondary"
              loading
              onClick={() => resetFormValues(control)}
            />
            <Button
              type="submit"
              value="Submit"
              onClick={onSubmit}
              variant="primary"
              loading
            />
          </Box>
        </Box>
      </Box>
      <div>
        <FormValuesWatcher />
      </div>
    </Form>
  );
};

export default () => {
  return (
    <PageView heading="Form" overflow="scroll">
      <FormNode />
    </PageView>
  );
};
