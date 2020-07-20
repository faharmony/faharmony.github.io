import React from "react";
import Select, { StylesConfig, Props } from "react-select";
import { Theme } from "@faharmony/theme";
import { Text } from "@faharmony/components";

const selectStyles: StylesConfig = {
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
    backgroundColor: Theme.colorBackground("elevated"),
    border: `1px solid ${Theme.colorOutline()}`,
    boxShadow: Theme.shadow("float"),
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: Theme.colorBackground(),
    minHeight: "32px",
    borderColor: Theme.colorOutline(),
    boxShadow: state.isFocused ? Theme.shadow("hover") : ``,
    "&:hover": {
      boxShadow: Theme.shadow("outline"),
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: Theme.colorText("disabled"),
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: Theme.colorText("disabled"),
  }),
  input: (base) => ({
    ...base,
    color: Theme.colorText("primary"),
    fontStyle: "normal",
  }),
  singleValue: (base) => ({
    ...base,
    color: Theme.colorText(),
  }),
  option: (base, state) => ({
    ...base,
    color: Theme.colorText(),
    backgroundColor: state.isSelected
      ? Theme.colorBackground("selected")
      : "inherit",
    "&:hover": {
      backgroundColor: Theme.colorBackground("hover"),
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: Theme.colorOutline(),
  }),
};

export interface IComboBoxProps extends Props {
  label?: string;
  helpText?: string;
}

/**
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const ComboBox = (props: IComboBoxProps) => {
  return (
    <div>
      {props.label && (
        <div style={{ marginLeft: Theme.spacing("sm") }}>
          <Text value={props.label} variant="h5" />
        </div>
      )}
      <Select
        {...props}
        styles={selectStyles}
        isClearable
        isSearchable
        // components={{ IndicatorSeparator: null }}
      />
      {props.helpText && (
        <Text value={props.helpText} variant="small" color="secondary" />
      )}
    </div>
  );
};

export default ComboBox;
