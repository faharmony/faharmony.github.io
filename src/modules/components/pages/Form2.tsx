import React from "react";
import {
  Form,
  useForm,
  resetFormValues,
  FormValuesWatcher,
  DatePicker,
  FormControl,
  Toggle,
  // NumberField,
} from "@faharmony/form";
import { Box } from "@faharmony/theme";
import { Button, Divider, InfoBox } from "@faharmony/components";
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
  new Date("2021-03-12"),
  new Date("2021-03-29"),
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
          <DatePicker name="testDate" includeDates={enabledDates} />
        </FormControl>
        <FormControl label="Date (disabled)">
          <DatePicker
            name="realDate"
            onChange={console.log}
            includeDates={[new Date()]}
            disabled
          />
        </FormControl>
        <Box>
          <FormControl label="Toggle (enabled)">
            <Toggle name="toggle" ref={register} label="Hello world" />
          </FormControl>
          <FormControl label="Toggle (disabled)">
            <Box>
              <Toggle disabled />
              <Toggle disabled checked={true} />
            </Box>
          </FormControl>
        </Box>
        {/* <FormControl label="NumberField">
          <NumberField name="number" ref={register} prefixText="EUR" />
        </FormControl> */}
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
    <Box style={{ width: "300px" }}>
      <FormControl label="Date (readonly)">
        <DatePicker
          name="realDate"
          onChange={console.log}
          selected={new Date()}
          readOnly
        />
      </FormControl>

      <InfoBox field="Date ">
        <DatePicker
          name="realDate"
          onDateChange={console.log}
          selected={new Date()}
        />
      </InfoBox>
    </Box>
  </PageView>
);

export default Page;
