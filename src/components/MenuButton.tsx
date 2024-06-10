// src/components/MenuButton.tsx

'use client';

import React from 'react';

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-gray-900 focus:outline-none"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
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
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
