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
import { Box } from "@faharmony/theme";
import { Button, Divider } from "@faharmony/components";
import { PageView } from "@faharmony/views";

type FormInputs = {
  testDate: Date;
  realDate: Date;
  toggle: boolean;
  number: number;
};

const defaultValues: Partial<FormInputs> = {
  testDate: new Date(),
  realDate: new Date("2020-12-12"),
  toggle: true,
  number: 1343400.234,
};

const enabledDates = [
  new Date(),
  new Date("2020-11-12"),
  new Date("2020-11-29"),
];

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
          <DatePicker
            name="testDate"
            enabledDates={enabledDates}
            onChange={console.log}
          />
        </FormControl>
        <FormControl label="Date2">
          <DatePicker
            name="realDate"
            onChange={console.log}
            defaultValue={new Date()}
          />
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

const Page = () => (
  <PageView heading="Form" overflow="scroll">
    <FormNode />
  </PageView>
);

export default Page;
