import React, { ReactNode } from 'react';
import { FaCircleExclamation } from 'react-icons/fa6';

interface DisabledOverlayProps {
  isDisabled: boolean; // Whether the overlay is active
  message?: string; // Optional message to display on the overlay
  children: ReactNode; // The content to render inside the component
}

const DisabledOverlay: React.FC<DisabledOverlayProps> = ({
  isDisabled,
  message,
  children,
}) => {
  return (
    <div className="relative">
      {/* The main content */}
      <div className={isDisabled ? 'pointer-events-none' : ''}>{children}</div>

      {/* The overlay */}
      {isDisabled && (
        <div className="from-secondary via-secondary/50 absolute inset-0 flex h-full items-end rounded-b-lg bg-gradient-to-t to-transparent">
          <div className="bg-destructive text-destructive-foreground flex w-full content-center justify-center rounded-b-lg p-2 text-center text-sm md:text-base">
            <span className="mr-2 self-center">
              <FaCircleExclamation />
            </span>
            <span>{message || 'This section is currently disabled.'}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisabledOverlay;
