import React from "react";
import {
  Form,
  FormValuesWatcher,
  InputField,
  useForm,
  resetFormValues,
  Checkbox,
  useFormContext,
} from "@faharmony/form";
import { Box, Button } from "@faharmony/components";
import {
  PageView,
  SummaryView,
  PrimaryWithSidebarLayout,
} from "@faharmony/views";

type Inputs = {
  firstName: string;
  lastName: string;
  remember: boolean;
};

const FormNode = () => {
  const { register, control, handleSubmit } = useFormContext();
  const onSubmit = handleSubmit(console.log);
  return (
    <Box direction="column" style={{ width: 200 }} alignItems="start">
      <InputField
        ref={register({ required: true })}
        name="firstName"
        placeholder="Enter first name..."
        autoComplete={"off"}
        type="password"
      />
      <InputField
        ref={register}
        name="lastName"
        placeholder="Enter last name..."
        readOnly
      />
      <Checkbox ref={register} name="remember" label="Remember me?" />
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
  const formMethods = useForm<Inputs>({
    defaultValues: { firstName: "S", lastName: "G" },
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
