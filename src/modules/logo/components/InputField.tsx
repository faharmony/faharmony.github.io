import React from "react";
import { Theme, styled } from "@faharmony/theme";
import { Text } from "@faharmony/components";

export interface IInputFieldProps {
  label?: string;
  helpText?: string;
  value: string;
  placeholder?: string;
  handleChange: (value: string) => void;
  type: string;
}

const StyledInput = styled.input`
  height: 36px;
`;

/**
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const InputField = (props: IInputFieldProps) => {
  const { label, helpText, handleChange } = props;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleChange(e.target.value);
  return (
    <div>
      {label && (
        <div style={{ marginLeft: Theme.spacing("sm") }}>
          <Text value={label} variant="h5" />
        </div>
      )}
      <StyledInput {...props} onChange={onChange} />
      {helpText && <Text value={helpText} variant="small" color="secondary" />}
    </div>
  );
};

export default InputField;
