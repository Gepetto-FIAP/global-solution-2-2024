import React from "react";
import InputMask from "react-input-mask";

export function Input({ mask, ...props }) {
  return (
    <>
      <label htmlFor={props.id} className="text-base mt-4 mb-2">
        {props.label}
      </label>
      <InputMask
        mask={mask}
        id={props.id}
        placeholder={props.placeholder}
        className="h-14 w-auto p-4 border border-solid rounded-md"
        {...props}
      />
    </>
  );
}
