import { useState, useCallback, FC } from "react";

import { PageView, SummaryView } from "@faharmony/views";
import { IStepProps, IStepperProps } from "@faharmony/navigation";
import { Button, useModal } from "@faharmony/components";
import {
  FormControl,
  TextField,
  useForm,
  useFormContext,
  SubmitHandler,
  resetFormValues,
} from "@faharmony/form";
import { Box } from "@faharmony/theme";
import { addToast } from "@faharmony/core";

interface UserFormInputs {
  firstName: string;
  lastName: string;
  address?: {};
  phone?: string;
  email?: string;
  username: string;
  password: string;
}
const userFormDefaultValues: Partial<UserFormInputs> = {
  firstName: "test",
  lastName: "ssss",
  address: {},
  phone: "",
  email: "",
  username: "",
  password: "",
};

const UserFirstNameField: FC = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <Box direction="column">
      <FormControl
        label="First name"
        errorText={errors.firstName?.message}
        helpText="Firstname of the user."
        required
      >
        <TextField
          name="firstName"
          placeholder="Enter full name"
          error={!!errors.firstName}
          ref={register({
            required: "Firstname is required",
            minLength: { value: 3, message: "At least 3 characters required." },
          })}
        />
      </FormControl>
    </Box>
  );
};

const UserLastNameField: FC = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <Box direction="column">
      <FormControl
        label="Lastname"
        helpText="Lastname of the user."
        errorText={errors.lastName?.message}
        required
      >
        <TextField
          name="lastName"
          placeholder="Enter lastname"
          error={!!errors.lastName}
          ref={register({
            required: "Lastname is required",
            minLength: { value: 3, message: "At least 3 characters required." },
          })}
        />
      </FormControl>
    </Box>
  );
};

const AddressField = ({ i }: { i: number }) => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <Box direction="column">
      <FormControl
        label={"Address " + i}
        errorText={errors.address ? errors.address[i].message : ""}
      >
        <TextField
          name={"address." + i}
          placeholder={"Enter address line " + i}
          error={errors.address ? !!errors.address[i] : false}
          ref={register}
        />
      </FormControl>
    </Box>
  );
};

const PhoneField = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <Box direction="column">
      <FormControl label="Phone" errorText={errors.phone?.message}>
        <TextField
          name={"phone"}
          placeholder="Enter phone number"
          error={!!errors.phone}
          ref={register({
            pattern: {
              value: /^\d{10}$/,
              message: "Only 10 digits phone number is allowed ",
            },
          })}
        />
      </FormControl>
    </Box>
  );
};

const EmailField = () => {
  const { register, errors } = useFormContext<UserFormInputs>();
  return (
    <Box direction="column">
      <FormControl label="Email" errorText={errors.email?.message}>
        <TextField
          name={"email"}
          placeholder="Enter email"
          error={!!errors.email}
          ref={register({
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Invalid email",
            },
          })}
        />
      </FormControl>
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
          ref={register({
            required: "Passsword is required",
            minLength: { value: 8, message: "At least 8 characters required." },
          })}
        />
      </FormControl>
    </Box>
  );
};

const Page = () => {
  // https://stackoverflow.com/questions/61380289/react-hook-form-field-value-get-lost-when-i-collapse-add-or-delete-panel
  const [open, setOpen] = useState(true);
  console.log("page");
  const [ModalWrapper, openModal, closeModal] = useModal(false);

  const steps: IStepProps[] = [
    {
      label: "Basic Information",
      completed: false,
      state: "active",
      content: (
        <Box direction="column">
          <UserFirstNameField />
          <UserLastNameField />
        </Box>
      ),
    },
    {
      label: "Address",
      completed: false,
      state: "active",
      content: (
        <Box direction="column">
          <AddressField i={0} />
          <AddressField i={1} />
        </Box>
      ),
    },
    {
      label: "Contact",
      completed: false,
      state: "active",
      content: (
        <Box direction="column">
          <PhoneField />
          <EmailField />
        </Box>
      ),
    },
    {
      label: "Credentials",
      completed: false,
      state: "active",
      content: (
        <Box direction="column">
          <UserFormUsernameField />
          <UserFormPasswordField />
        </Box>
      ),
    },
    {
      label: "Dummy Step",
      completed: false,
      state: "active",
    },
    {
      label: "Dummy Step 2",
      completed: false,
      state: "active",
    },
  ];

  const formMethods = useForm<UserFormInputs>({
    defaultValues: userFormDefaultValues,
    shouldUnregister: false,
    mode: "onBlur",
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

  const stepper: IStepperProps = {
    steps: steps,
    currentStep: 0,
    formMethods: formMethods,
    handleSubmitButton: onSubmit,
    editMode: false,
  };

  return (
    <PageView
      heading="Stepper component"
      actions={
        <>
          <Button
            value="Open SummaryView"
            onClick={() => setOpen(true)}
            disabled={open}
          />

          <Button value="Open As Modal" onClick={() => openModal()} />
        </>
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
      <ModalWrapper style={{ height: "90vh", width: "30vw" }}>
        <SummaryView
          caption="FA user"
          heading="New user"
          onClose={() => closeModal()}
          stepper={stepper}
        ></SummaryView>
      </ModalWrapper>
    </PageView>
  );
};

export default Page;
