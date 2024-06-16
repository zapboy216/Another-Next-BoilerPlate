import classNames from 'classnames';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface LoadingSkeletonProps {
  count?: number;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  count = 1,
  className,
}) => {
  return (
    <>
      {Array.from({ length: count }).map(() => (
        <div
          key={uuidv4()}
          className={classNames(
            'bg-gray-200 dark:bg-gray-700 animate-pulse',
            className,
          )}
        />
      ))}
    </>
  );
};

export default LoadingSkeleton;
