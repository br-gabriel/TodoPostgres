import React from "react";
import { Input } from "./styles";

export function FormInput({ type, placeholder, value, onChange }) {
    return (
        <Input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    );
};