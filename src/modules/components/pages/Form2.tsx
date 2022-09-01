import {
  Form,
  useForm,
  resetFormValues,
  FormValuesWatcher,
  DatePicker,
  FormControl,
  Toggle,
  TextField,
  DateRangePicker,
  useFormDateRangeProps,
} from "@faharmony/form";
import { Box } from "@faharmony/theme";
import { Button, Divider, InfoBox } from "@faharmony/components";
import { PageView } from "@faharmony/views";
import React from "react";

type FormInputs = {
  testDate: Date;
  realDate: Date;
  toggle: boolean;
  number: number;
  startDate: Date;
  endDate: Date;
};

const defaultValues: Partial<FormInputs> = {
  testDate: new Date(),
  realDate: new Date("2020-12-12"),
  toggle: true,
  number: 1343400.234,
  startDate: undefined,
  endDate: undefined,
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
  const { control, handleSubmit, register, setValue } = formMethods;

  const onSubmit = handleSubmit(console.log);
  return (
    <Form formMethods={formMethods} style={{ width: "100%" }} direction="row">
      <Box direction="column" width={"350px"} alignItems="start">
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
        <FormControl label="NumberField">
          <TextField
            name="number"
            ref={register}
            prefixText="EUR"
            isClearable
            onInputClear={() => setValue("number", "")}
          />
        </FormControl>
        <Divider />

        <UserFormDateRangeField />
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

    <UserFormDateRangeField2 />
  </PageView>
);

export default Page;

const UserFormDateRangeField: React.FC = () => {
  const props = useFormDateRangeProps(
    "startDate",
    "endDate",
    new Date("2021/05/04 22:21"),
    new Date("2021/06/04 15:30")
  );

  return (
    <FormControl label="Date Range in a Form" required>
      <DateRangePicker
        {...props}
        showCustomTimeSelector
        hideTodayButton
      ></DateRangePicker>
    </FormControl>
  );
};

const UserFormDateRangeField2: React.FC = () => {
  const [startDate, setStartDate] = React.useState<Date | undefined>(
    new Date("2021/05/04 22:21")
  );
  const [endDate, setEndDate] = React.useState<Date | undefined>(
    new Date("2021/05/04 22:21")
  );

  React.useEffect(
    () =>
      console.log(
        "This is date state controlled date range outside a form ",
        startDate,
        endDate
      ),
    [startDate, endDate]
  );

  return (
    <Box justifyContent="flex-start">
      <FormControl label="Test Range without form " required>
        <Box width={"min-content"}>
          <DateRangePicker
            endDate={endDate}
            startDate={startDate}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            showCustomTimeSelector
          ></DateRangePicker>
        </Box>
      </FormControl>
    </Box>
  );
};
