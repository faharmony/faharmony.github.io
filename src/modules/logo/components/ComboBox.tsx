import React from "react";
import { Combobox, IComboboxProps } from "@faharmony/form";
import { Theme } from "@faharmony/theme";
import { Text } from "@faharmony/components";

/**
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const ComboBox = (props: IComboboxProps) => {
  return (
    <div>
      {props.label && (
        <div style={{ marginLeft: Theme.spacing("sm") }}>
          <Text value={props.label} variant="h5" />
        </div>
      )}
      <Combobox {...props} name={props.label} />
      {props.helpText && (
        <Text value={props.helpText} variant="small" color="secondary" />
      )}
    </div>
  );
};

export default ComboBox;
