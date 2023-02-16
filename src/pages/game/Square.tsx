import { useState } from "react";

export const Square = ({
  value,
  onSquareClick,
}: {
  value: any;
  onSquareClick: any;
}) => {
  return (
    <button
      className="font-bold w-10 h-10 text-center leading-10 p-0"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
