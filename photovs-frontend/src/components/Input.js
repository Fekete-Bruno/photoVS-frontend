import React from "react";
import styled from "styled-components";

export default function Input({
  className = "",
  height = "65px",
  placeholder,
  type,
  name,
  value,
  onChange,
}) {
  return (
    <Wrapper
      className={className}
      height={height}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    ></Wrapper>
  );
}

const Wrapper = styled.input`

  &.log {
    width: 100%;
    background: #ffffff;
    border: none;
    border-radius: 6px;
    margin: 6px auto;
    padding: 12px 12px;
    font-weight: 700;
    font-size: 22px;
    ::placeholder {
      font-weight: 700;
      font-size: 22px;
      color: #9f9f9f;
    }
  }
`;
