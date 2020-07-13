import React from "react";
import { Text, Accordion, Preloader } from "@faharmony/components";
import { useModuleState, useDispatch } from "@faharmony/state";
import { IModuleState, ModuleActions } from "../state";

/**
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const Display = () => {
  const state = useModuleState<IModuleState>();
  //   const dispatch = useDispatch();
  if (state.loading) return <Preloader />;
  else
    return (
      <div>
        <Text
          value="All generated logos will appear here. They can be configured using side-drawer."
          color="disabled"
        />
        <br />
        <br />
        <Accordion
          independent
          panels={[
            {
              id: "standard",
              heading: "Standard logos",
              defaultActive: true,
              content: <div />,
            },
            {
              id: "custom",
              heading: "Customized logos",
              defaultActive: true,
              content: <div />,
            },
          ]}
        />
      </div>
    );
};

export default Display;
