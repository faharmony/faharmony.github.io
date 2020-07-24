import React from "react";
import {
  Form,
  TextField,
  Checkbox,
  Combobox,
  useForm,
  FormValuesWatcher,
  resetFormValues,
  useFormContext,
  // IComboboxProps,
  ComboboxOptionsType,
} from "@faharmony/form";
import { Box, Button } from "@faharmony/components";
import {
  PageView,
  SummaryView,
  PrimaryWithSidebarLayout,
} from "@faharmony/views";

type Option = { label: string; value: string };

type FormInputs = {
  username: string;
  password: string;
  env: Option;
  roles: Option;
  remember: boolean;
};

const envOptions: ComboboxOptionsType = [
  { label: "Develop", value: "fadev" },
  { label: "Master", value: "master37" },
  { label: "Test", value: "test37" },
];

const rolesOptions: ComboboxOptionsType = [
  {
    label: "roles",
    options: [
      { label: "Admin", value: "admin" },
      { label: "BO", value: "back" },
      { label: "Client", value: "front" },
    ],
  },
];

const defaultValues: Partial<FormInputs> = {
  username: "admin",
  // password: "ke5ku5TA",
  remember: true,
  roles: rolesOptions[0].options[0],
};

const FormNode = () => {
  const { register, control, handleSubmit, errors } = useFormContext();
  const onSubmit = handleSubmit(console.log);

  return (
    <Box direction="column" style={{ width: "300px" }} alignItems="start">
      <TextField
        prefixText="€"
        ref={register}
        name="username"
        placeholder="Enter username..."
        status="success"
      />
      <TextField
        name="password"
        ref={register({ required: true })}
        placeholder="Enter password..."
        autoComplete="off"
        type="password"
        status={errors.password && "error"}
      />
      {errors?.password?.types?.required && <p>password required</p>}
      <Combobox
        name="env"
        placeholder="Select environment..."
        options={envOptions}
      />
      <Combobox
        name="roles"
        placeholder="Select roles..."
        options={rolesOptions}
        isMulti
      />
      <Checkbox ref={register} name="remember" label="Keep me logged in" />
      <Box direction="row-reverse">
        <Button
          type="submit"
          value="Submit"
          onClick={onSubmit}
          variant="primary"
        />
        <Button value="Reset" onClick={() => resetFormValues(control)} />
      </Box>
    </Box>
  );
};

export default () => {
  const formMethods = useForm<FormInputs>({
    defaultValues,
    criteriaMode: "all",
  });
  return (
    <PageView heading="Form">
      <Form formMethods={formMethods} style={{ height: "100%" }}>
        <PrimaryWithSidebarLayout
          primaryNode={<FormNode />}
          secondaryNode={
            <SummaryView
              caption={"form"}
              heading="Current values"
              onClose={() => {}}
            >
              <FormValuesWatcher />
            </SummaryView>
          }
        />
      </Form>
    </PageView>
  );
};
