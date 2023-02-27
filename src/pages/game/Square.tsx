import { useState } from "react";

export const Square = ({
  value,
  onSquareClick,
}: {
  value: any;
  onSquareClick: any;
}) => {
  return (
    <div>
      <button
        className="font-bold min-w-10 text-center leading-10 p-0 border min-h-10"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
};
