'use client';

import { useState } from 'react';

import { GuestbookForm } from './GuestbookForm';

const EditableGuestbookEntry = (props: {
  id: number;
  username: string;
  body: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((value) => !value);
  };

  const handleStopEditing = () => {
    setIsEditing(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="edit"
        onClick={handleEdit}
        className="text-white hover:text-gray-300"
      >
        <svg
          className="size-6 stroke-current"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4M13.5 6.5l4 4" />
        </svg>
      </button>

      <div className="ml-1 grow">
        {isEditing ? (
          <GuestbookForm
            edit
            id={props.id}
            defaultValues={{
              username: props.username,
              body: props.body,
            }}
            handleStopEditing={handleStopEditing}
          />
        ) : (
          <>
            <span className="font-bold text-white">{props.username}:</span>{' '}
            <span className="text-gray-300">{props.body}</span>
          </>
        )}
      </div>
    </>
  );
};

export { EditableGuestbookEntry };
