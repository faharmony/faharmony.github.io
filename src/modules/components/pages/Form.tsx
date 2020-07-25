import React from "react";
import {
  Form,
  TextField,
  Checkbox,
  Combobox,
  useForm,
  resetFormValues,
  ComboboxOptionsType,
} from "@faharmony/form";
import { Box, Button } from "@faharmony/components";
import { PageView } from "@faharmony/views";

type Option = { label: string; value: string };

type FormInputs = {
  username: string;
  password: string;
  env: Option;
  roles: Option;
  remember: boolean;
};

const envOptions: ComboboxOptionsType = [
  { label: "Develop", value: "dev" },
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
  password: "ke5ku5TA",
  remember: true,
  env: envOptions[0],
  roles: rolesOptions[0].options[0],
};

const FormNode = () => {
  const formMethods = useForm<FormInputs>({
    defaultValues,
    criteriaMode: "all",
  });
  const { register, control, handleSubmit, errors } = formMethods;
  const onSubmit = handleSubmit(console.log);

  return (
    <Form formMethods={formMethods} style={{ width: "300px" }}>
      <TextField
        ref={register({ required: true })}
        name="username"
        placeholder="Enter username..."
        error={errors.username && "Username required"}
      />
      <TextField
        name="password"
        ref={register({ required: true })}
        placeholder="Enter password..."
        type="password"
        error={errors.password && "Password required"}
      />
      <Combobox
        name="env"
        placeholder="Select environment..."
        options={envOptions}
        isSearchable={false}
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
    </Form>
  );
};

export default () => {
  return (
    <PageView heading="Form">
      <FormNode />
    </PageView>
  );
};
