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
  select: { label: string; value: string };
};

const FormNode = () => {
  const { register, control, handleSubmit } = useFormContext();
  const onSubmit = handleSubmit(console.log);
  return (
    <Box direction="column" style={{ width: 200 }} alignItems="start">
      <TextField
        ref={register({ required: true })}
        name="firstName"
        placeholder="Enter first name..."
        autoComplete={"off"}
        type="password"
      />
      <TextField
        ref={register}
        name="lastName"
        placeholder="Enter last name..."
        readOnly
      />
      <Combobox
        name="select"
        options={[
          { label: "Option1", value: "o1" },
          { label: "Option2", value: "o2" },
        ]}
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
    defaultValues: {
      firstName: "S",
      lastName: "G",
      remember: true,
      select: { label: "Option1", value: "o1" },
    },
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
