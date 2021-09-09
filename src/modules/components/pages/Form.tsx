import React from "react";
import {
  Form,
  FormControl,
  TextField,
  Checkbox,
  Combobox,
  Button,
  DatePicker,
  Toggle,
  useForm,
  useFormContext,
  useFormDatePickerProps,
} from "@faharmony/form";
import { Box } from "@faharmony/theme";
import { formatDate } from "@faharmony/locale";
import type {
  ComboboxOptionType,
  ComboboxOptionsType,
  SubmitHandler,
} from "@faharmony/form";
import type { FC } from "react";

interface UserFormInputs {
  fullName?: string;
  username: string;
  password: string;
  dob: string;
  roles: ComboboxOptionType[];
  locale?: ComboboxOptionType;
  darkMode?: boolean;
  terms: boolean;
  privacy: boolean;
}

const userFormDefaultValues: Partial<UserFormInputs> = {
  fullName: "",
  username: "Love",
  password: "KesKus44tA",
  dob: formatDate(new Date("01-01-2020")),
  darkMode: false,
  locale: { value: "en", label: "English" },
  terms: false,
  privacy: false,
};

const UserFormFullNameField: FC = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <FormControl label="Full name" errorText={errors.fullName?.message}>
      <TextField
        name="fullName"
        placeholder="Enter full name"
        error={!!errors.fullName}
        ref={register}
      />
    </FormControl>
  );
};

const UserFormUsernameField: FC = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <FormControl
      label="Username"
      helpText="Login username for the user."
      errorText={errors.username?.message}
      required
    >
      <TextField
        name="username"
        placeholder="Enter username"
        error={!!errors.username}
        ref={register({
          required: "Username is required",
          minLength: { value: 4, message: "At least 4 characters required." },
        })}
      />
    </FormControl>
  );
};

const UserFormPasswordField: FC = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  const passwordPatternRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const passwordPatternMessage =
    "Password should be minimum 8 characters long and contain at least one uppercase letter, one lowercase letter and one number.";
  return (
    <FormControl
      label="Password"
      helpText="Login password for the user."
      errorText={errors.password?.message}
      required
    >
      <TextField
        name="password"
        type="password"
        placeholder="Enter password"
        error={!!errors.password}
        ref={register({
          required: "Password is required",
          pattern: {
            value: passwordPatternRegex,
            message: passwordPatternMessage,
          },
        })}
      />
    </FormControl>
  );
};

const UserFormDOBField: FC = () => {
  const formDatePickerProps = useFormDatePickerProps(
    "dob",
    userFormDefaultValues.dob
  );
  return (
    <FormControl label="Date of birth" required>
      <DatePicker {...formDatePickerProps} />
    </FormControl>
  );
};

const UserFormRolesField: FC = () => {
  const rolesOptions: ComboboxOptionsType = [
    { label: "Admin", value: "admin" },
    { label: "BO", value: "back" },
    { label: "Client", value: "front" },
    { label: "Super Admin", value: "super", isDisabled: true },
  ];
  return (
    <FormControl label="Roles" required>
      <Combobox
        name="roles"
        required
        placeholder="Select roles..."
        options={rolesOptions}
        isMulti
      />
    </FormControl>
  );
};

const UserFormLocaleField: FC = () => {
  const localeOptions: ComboboxOptionsType = [
    { label: "English", value: "en" },
    { label: "Suomi", value: "fi" },
    { label: "Sverige", value: "sv" },
  ];
  return (
    <FormControl label="Locale">
      <Combobox
        name="locale"
        placeholder="Select locale..."
        options={localeOptions}
        isSearchable={false}
      />
    </FormControl>
  );
};

const UserFormDarkModeField: FC = () => {
  const { register } = useFormContext<UserFormInputs>();
  return (
    <FormControl label="Prefer dark mode?">
      <Toggle name="darkMode" ref={register} />
    </FormControl>
  );
};

const UserFormTermsField: FC = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <>
      <FormControl
        label="Terms and conditions"
        errorText={errors.terms?.message}
      >
        <Checkbox
          name="terms"
          label="Accept the terms and conditions."
          ref={register({
            required: "It is required to accept the terms and condition",
          })}
        />
      </FormControl>
      <FormControl errorText={errors.privacy?.message}>
        <Checkbox
          name="privacy"
          label="Accept the privacy policy."
          ref={register({
            required: "It is required to accept the privacy policy",
          })}
        />
      </FormControl>
    </>
  );
};

const UserFormButtons: FC = () => {
  const { formState } = useFormContext<UserFormInputs>();
  const { isSubmitting, isDirty } = formState;
  return (
    <Box direction="row-reverse">
      <Button
        type="submit"
        variant="primary"
        value="Add user"
        loading={isSubmitting}
      />
      <Button
        type="reset"
        variant="secondary"
        value="Reset form"
        disabled={!isDirty}
      />
    </Box>
  );
};

const UserForm: FC = () => {
  const formMethods = useForm<UserFormInputs>({
    defaultValues: userFormDefaultValues,
  });
  const onSubmit: SubmitHandler<UserFormInputs> = React.useCallback(
    async (values) => {
      console.log(values);
      // Dummy wait for 1s.
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    []
  );

  return (
    <Form
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(onSubmit)}
    >
      <UserFormFullNameField />
      <UserFormUsernameField />
      <UserFormPasswordField />
      <UserFormDOBField />
      <UserFormRolesField />
      <UserFormLocaleField />
      <UserFormDarkModeField />
      <UserFormTermsField />
      <UserFormButtons />
    </Form>
  );
};

export default UserForm;
