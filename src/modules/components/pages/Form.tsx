import React from "react";
import {
  Form,
  WatchFormValues,
  InputField,
  useForm,
  resetFormValues,
} from "@faharmony/form";
import { Box, Button, Divider } from "@faharmony/components";
import { PageView } from "@faharmony/views";

type Inputs = {
  firstName: string;
  lastName: string;
};

export default () => {
  const methods = useForm<Inputs>({
    defaultValues: { firstName: "S", lastName: "G" },
  });
  const { register, handleSubmit, control } = methods;
  const onSubmit = handleSubmit(console.log);
  return (
    <PageView heading="Form">
      <Form onSubmit={onSubmit} formMethods={methods}>
        <Box>
          <Box direction="column" style={{ width: 300 }}>
            <InputField
              ref={register}
              name="firstName"
              placeholder="Enter first name..."
              autoComplete={"off"}
              isClearable={false}
            />
            <InputField
              ref={register}
              name="lastName"
              placeholder="Enter last name..."
              readOnly
            />
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
          <Divider spacing="md" vertical />
          <WatchFormValues />
        </Box>
      </Form>
    </PageView>
  );
};
