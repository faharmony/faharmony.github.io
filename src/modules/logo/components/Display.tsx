import { Accordion, Text, Preloader } from "@faharmony/components";

import { useModuleState } from "../state";

/**
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const Display = () => {
  const state = useModuleState();
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
