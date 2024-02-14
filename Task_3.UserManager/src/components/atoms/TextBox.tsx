// Import React, PropTypes, and reactstrap
import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";

// Define an interface for TextBox props
interface TextBoxProps {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: InputType;
  disabled?: boolean;
  invalid?: boolean;
  valid?: boolean;
}

// Define a function component called TextBox that inherits from Input
function TextBox(props: TextBoxProps) {
  // Get the props
  const {
    id,
    name,
    value,
    onChange,
    placeholder,
    type,
    disabled,
    invalid,
    valid,
  } = props;

  // Return the JSX markup for the TextBox component
  return (
    <Input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      invalid={invalid}
      valid={valid}
    />
  );
}

// Define the prop types
TextBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

// Define the default props
TextBox.defaultProps = {
  placeholder: "",
  type: "text",
  disabled: false,
  invalid: false,
  valid: false,
};

export default TextBox;
