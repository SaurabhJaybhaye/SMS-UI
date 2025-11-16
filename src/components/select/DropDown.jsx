import React from "react";
import Select from "react-select";

const DropDown = ({
  onChange,
  options,
  value,
  className,
  placeholder,
  onBlur,
  name,
  disable,
}) => {
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      padding: "0.5rem",
      fontSize: "medium",
      color: "black",
    }),
  };

  return (
    <Select
      closeMenuOnSelect={false}
      options={options}
      placeholder={placeholder}
      onBlur={onBlur}
      className={className}
      onChange={onChange}
      name={name}
      value={value}
      styles={colorStyles}
      disable={disable}
    />
  );
};

export default DropDown;
