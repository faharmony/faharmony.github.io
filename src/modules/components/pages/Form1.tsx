import {
  Form,
  FormControl,
  TextField,
  Checkbox,
  Combobox,
  RadioGroup,
  useForm,
  resetFormValues,
  ComboboxOptionType,
  ComboboxOptionsType,
  FormValuesWatcher,
  RadioOptionType,
} from "@faharmony/form";
import { Button, Divider } from "@faharmony/components";
import { Box } from "@faharmony/theme";
import { PageView } from "@faharmony/views";

type FormInputs = {
  username: string;
  password: string;
  env: RadioOptionType;
  roles: ComboboxOptionType[];
  number: number;
  env2: string;
  remember: boolean;
};

const envOptions: ComboboxOptionsType[] | RadioOptionType[] = [
  { label: "Develop", value: "dev" },
  { label: "Master", value: "master", help: "Master Environment" },
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
  number: 324.432,
  env: envOptions[0],
  env2: "test",
  roles: [rolesOptions[0].options[0]],
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
        <FormControl
          label="Username"
          helpText={"Your login username.  \n Must meet the requirement"}
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
            error={!!errors.username}
          />
        </FormControl>
        <FormControl
          label="Password"
          required
          errorText={errors.password?.message}
        >
          <TextField
            name="password"
            ref={register({ required: "Password required" })}
            placeholder="Enter password..."
            type="password"
            error={!!errors.password}
          />
        </FormControl>
        <FormControl label="Applicable roles">
          <Combobox
            name="roles"
            placeholder="Select roles..."
            options={rolesOptions}
          />
        </FormControl>
        <FormControl label="Environment" helpText="Development environment">
          <Combobox
            name="env"
            placeholder="Select environment..."
            options={envOptions}
            isMulti={false}
            isSearchable={false}
          />
        </FormControl>

        <FormControl label="Environment again...">
          <RadioGroup
            name="env2"
            options={[...envOptions]}
            ref={register}
            direction="row"
          />
        </FormControl>
        <FormControl label="Number">
          <TextField placeholder="0.00" error={!!errors.number} name="number" />
        </FormControl>

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

const Page = () => (
  <PageView heading="Form" overflow="scroll">
    <FormNode />
  </PageView>
);

export default Page;
