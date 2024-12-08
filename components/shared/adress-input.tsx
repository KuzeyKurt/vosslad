import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="text-green-700">
    <AddressSuggestions
      // className="text-green-700 bg-slate-700"
      token=""
      onChange={(data) => onChange?.(data?.value)}
    /></div>
  );
};
