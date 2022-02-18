import React from "react";

const CountInput = ({name, value}) => {
  return (
      <input name={name} value={value} disabled className="count-input" />
  );
};

export default CountInput;