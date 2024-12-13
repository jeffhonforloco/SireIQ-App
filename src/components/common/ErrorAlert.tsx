import React from 'react';

interface ErrorAlertProps {
  message: string;
}

export function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <div className="text-red-600 p-4 bg-red-50 rounded-lg">
      {message}
    </div>
  );
}