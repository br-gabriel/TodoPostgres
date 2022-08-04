import React from "react";
import { Button } from "./styles";

export function FormButton({ Text, onClick, Type }) {
    return (
        <Button
            type={Type}
            onClick={onClick}
        >
            {Text}
        </Button>
    );
};