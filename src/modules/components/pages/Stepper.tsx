import { useState, useCallback, FC } from "react";

import { PageView, SummaryView } from "@faharmony/views";
import { IStepProps, IStepperProps } from "@faharmony/navigation";
import { Button } from "@faharmony/components";
import {
  FormControl,
  TextField,
  useForm,
  useFormContext,
  FormValuesWatcher,
  SubmitHandler,
  resetFormValues,
} from "@faharmony/form";
import { Box } from "@faharmony/theme";
import { addToast } from "@faharmony/core";

interface UserFormInputs {
  fullName?: string;
  username: string;
  password: string;
}
const userFormDefaultValues: Partial<UserFormInputs> = {
  fullName: "",
  username: "Harmony user",
  password: "password 123",
};

const UserFormFullNameField: FC = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <Box direction="column">
      <FormControl label="Full name" errorText={errors.fullName?.message}>
        <TextField
          name="fullName"
          placeholder="Enter full name"
          error={!!errors.fullName}
          ref={register}
        />
      </FormControl>
      <FormValuesWatcher />
    </Box>
  );
};

const UserFormUsernameField: FC = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <Box direction="column">
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
    </Box>
  );
};

const UserFormPasswordField: FC = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <Box direction="column">
      <FormControl
        label="Password"
        helpText="Login password for the user."
        errorText={errors.password?.message}
        required
      >
        <TextField
          name="password"
          placeholder="Enter password"
          error={!!errors.password}
          ref={register}
        />
      </FormControl>
    </Box>
  );
};

const Page = () => {
  // https://stackoverflow.com/questions/61380289/react-hook-form-field-value-get-lost-when-i-collapse-add-or-delete-panel
  const [open, setOpen] = useState(true);

  const formMethods = useForm<UserFormInputs>({
    defaultValues: userFormDefaultValues,
    shouldUnregister: false,
  });

  const { control } = formMethods;

  const onSubmit: SubmitHandler<UserFormInputs> = useCallback(
    (values: UserFormInputs) => {
      console.log("Sent values: " + JSON.stringify(values));
      setOpen(false);
      addToast({
        id: "submit",
        title: "Information saved",
        variant: "positive",
        persist: false,
      });
      resetFormValues(control);
    },
    [control]
  );

  const steps: IStepProps[] = [
    {
      label: "Step 0",
      completed: false,
      state: "active",
      content: <UserFormFullNameField />,
    },
    {
      label: "Step 1",
      completed: false,
      state: "active",
      content: <UserFormUsernameField />,
    },
    {
      label: "Step 2 with very very very long name",
      completed: false,
      state: "active",
      content: <UserFormPasswordField />,
    },
    {
      label: "Step 3",
      completed: false,
      state: "active",
      content: <UserFormUsernameField />,
    },
    {
      label: "Step 4 with very very very long name",
      completed: false,
      state: "active",
      content: <UserFormUsernameField />,
    },
    {
      label: "Step 5",
      completed: false,
      state: "active",
      content: <UserFormUsernameField />,
    },
    {
      label: "Step 6 with very very very long name",
      completed: false,
      state: "active",
      content: <UserFormUsernameField />,
    },
    {
      label: "Step 7",
      completed: false,
      state: "active",
      content: <UserFormUsernameField />,
    },
    {
      label: "Step 8 with very very very long name",
      completed: false,
      state: "active",
      content: <UserFormUsernameField />,
    },
    {
      label: "Step 9",
      completed: false,
      state: "active",
      content: <UserFormUsernameField />,
    },
  ];

  const stepper: IStepperProps = {
    steps: steps,
    currentStep: 0,
    formMethods: formMethods,
    handleSubmitButton: onSubmit,
    editMode: true,
  };

  return (
    <PageView
      heading="Stepper component"
      actions={
        <Button
          value="Open SummaryView"
          onClick={() => setOpen(true)}
          disabled={open}
        />
      }
    >
      {open && (
        <SummaryView
          caption="FA user"
          heading="New user"
          onClose={() => setOpen(false)}
          stepper={stepper}
        ></SummaryView>
      )}
    </PageView>
  );
};

export default Page;
