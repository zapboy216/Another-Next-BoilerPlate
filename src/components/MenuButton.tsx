// MenuButton.tsx

'use client';

import React from 'react';

const MenuButton = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded p-2 focus:outline-none ${
        isOpen ? 'text-white' : 'text-black dark:text-white'
      }`}
    >
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
        />
      </svg>
    </button>
  );
};

export default MenuButton;
