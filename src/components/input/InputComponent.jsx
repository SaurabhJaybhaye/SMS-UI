import React from "react";

const InputComponent = ({
  name,
  type = "text",
  value,
  handleChange,
  placeholder,
  onBlur,
  errorMessage,
  label,
}) => {
  return (
    <>
      <div className="form-floating mt-3">
        <input
          type={type}
          className="form-control"
          id="floatingInput"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <label htmlFor="floatingInput">{label}</label>
      </div>
      {errorMessage && <label className="error-message">{errorMessage}</label>}
    </>
  );
};

export default InputComponent;
