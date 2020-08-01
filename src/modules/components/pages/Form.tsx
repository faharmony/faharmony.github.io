import React from "react";
import {
  Form,
  InputField,
  TextField,
  Checkbox,
  Combobox,
  RadioGroup,
  DatePicker,
  DatePicker2,
  useForm,
  resetFormValues,
  ComboboxOptionType,
  ComboboxOptionsType,
  FormValuesWatcher,
} from "@faharmony/form";
import { Box, Button, Divider } from "@faharmony/components";
import { PageView } from "@faharmony/views";

type FormInputs = {
  username: string;
  password: string;
  env: ComboboxOptionType;
  roles: ComboboxOptionType;
  date: Date;
  date2: Date;
  env2: string;
  remember: boolean;
};

const envOptions: ComboboxOptionsType = [
  { label: "Develop", value: "dev" },
  { label: "Master", value: "master" },
  { label: "Test", value: "test", isDisabled: true },
];

const rolesOptions: ComboboxOptionsType = [
  {
    label: "roles",
    options: [
      { label: "Admin", value: "admin" },
      { label: "BO", value: "back" },
      { label: "Client", value: "front", isDisabled: true },
    ],
  },
];

const defaultValues: Partial<FormInputs> = {
  username: "admin",
  password: "ke5ku5TA",
  remember: true,
  env: envOptions[0] as any,
  env2: "test",
  roles: rolesOptions[0].options[0],
  date: new Date(),
  date2: new Date(2018, 11, 30),
};

const FormNode = () => {
  const formMethods = useForm<FormInputs>({
    defaultValues,
    criteriaMode: "all",
  });
  const { register, control, handleSubmit, errors } = formMethods;
  const onSubmit = handleSubmit(console.log);

  return (
    <Form formMethods={formMethods} style={{ width: "100%" }} direction="row">
      <Box direction="column" width={"260px"} alignItems="start">
        <InputField label="Registration date">
          <DatePicker2
            name="date2"
            ref={register}
            disabledDates={[new Date(2020, 6, 21), new Date(2020, 6, 22)]}
          />
        </InputField>
        <InputField
          label="Username"
          helpText="Your login username."
          errorText={errors.username?.message}
          required
        >
          <TextField
            ref={register({
              required: "Username required",
              minLength: { value: 4, message: "More than 3 characters." },
            })}
            name="username"
            placeholder="Enter username..."
            error={errors.username?.message}
          />
        </InputField>
        <InputField
          label="Password"
          required
          helpText={errors.password?.message}
        >
          <TextField
            name="password"
            ref={register({ required: "Password required" })}
            placeholder="Enter password..."
            type="password"
            error={errors.password?.message}
          />
        </InputField>
        <InputField label="Applicable roles">
          <Combobox
            name="roles"
            placeholder="Select roles..."
            options={rolesOptions}
            isMulti
          />
        </InputField>
        <InputField label="Environment">
          <Combobox
            name="env"
            placeholder="Select environment..."
            options={envOptions}
            isSearchable={false}
          />
        </InputField>

        <InputField label="Environment again...">
          <RadioGroup
            name="env2"
            options={[...envOptions]}
            ref={register}
            direction="row"
          />
        </InputField>
        <InputField label="Registration date">
          <DatePicker
            name="date"
            disabledDates={[new Date(2020, 6, 21), new Date(2020, 6, 22)]}
          />
        </InputField>

        <Divider />
        <Box justifyContent="space-between">
          <Checkbox ref={register} name="remember" label="Keep me logged in" />
          <Box width="auto">
            <Button
              value="Reset"
              variant="secondary"
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
      <FormValuesWatcher />
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
