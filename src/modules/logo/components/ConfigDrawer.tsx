import React from "react";
import { SummaryView } from "@faharmony/views";
import { theme, Box } from "@faharmony/theme";

import { useModuleState, useDispatch } from "@faharmony/state";
import { insertQueryParam } from "@faharmony/router";

import { IModuleState, ModuleActions } from "../state";
import { ComboBox } from "./ComboBox";
import { InputField } from "./InputField";

interface Obj {
  value: string;
  label: string;
}

const configurationOptions = {
  variants: [
    { value: "all", label: "All" },
    { value: "company", label: "Company branding" },
    { value: "platform", label: "Apps branding" },
  ],
  icon: [
    { value: "all", label: "All" },
    { value: "transparent", label: "Transparent" },
    { value: "opaque", label: "Opaque" },
  ],
};

const getCurrentOption = (
  option: keyof typeof configurationOptions,
  value: string
) =>
  configurationOptions[option].find((o) => o.value === value) ||
  configurationOptions[option][0];

const ColorPicker = ({ onChange }: { onChange: (o: Obj) => void }) => {
  const {
    config: { color },
  } = useModuleState<IModuleState>();
  const [value, setValue] = React.useState(color.primary);
  const handleChange = (val: string) => {
    setValue(val);
    onChange({ value: val, label: "" });
  };
  return <InputField handleChange={handleChange} value={value} type="color" />;
};

/**
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const ConfigDrawer = () => {
  const dispatch = useDispatch();
  const { isConfigDrawerOpen, config } = useModuleState<IModuleState>();
  const { variant, icon } = config;

  const handleChange = (
    action: Function,
    option: any,
    defaultValue = "all"
  ) => {
    const key = action.toString().split("set")[1];
    const value = option?.value || defaultValue;
    dispatch(action(value));
    insertQueryParam(key, value);
  };

  return isConfigDrawerOpen ? (
    <SummaryView
      caption="Logo"
      heading="Configuration"
      onClose={() => dispatch(ModuleActions.toggleConfigDrawer())}
    >
      <Box
        direction="column"
        alignItems="normal"
        style={{ padding: theme.spacing.md }}
      >
        <ComboBox
          label="Variant"
          placeholder="Select variant..."
          options={configurationOptions.variants}
          defaultValue={getCurrentOption("variants", variant)}
          onChange={(o: any) => handleChange(ModuleActions.setVariant, o)}
        />
        <ComboBox
          label="Icon style"
          placeholder="Select icon style..."
          options={configurationOptions.icon}
          defaultValue={getCurrentOption("icon", icon)}
          onChange={(o: any) => handleChange(ModuleActions.setIcon, o)}
        />
        <ColorPicker
          onChange={(o: any) => handleChange(ModuleActions.setColor, o)}
        />
      </Box>
    </SummaryView>
  ) : null;
};

export default ConfigDrawer;
