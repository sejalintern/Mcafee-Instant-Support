import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  isCallToAction?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  className = '',
  isCallToAction = false,
  ...rest
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold py-3 px-6 rounded-full ' +
    'transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const callToActionClasses =
    'bg-green-600 text-white shadow-lg focus:ring-green-500 focus:ring-offset-blue-800';
  const defaultClasses =
    'bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:ring-blue-500';

  const finalClasses = `${baseClasses} ${isCallToAction ? callToActionClasses : defaultClasses} ${className}`;

  if (to) {
    // If 'to' is provided, it's a link (e.g., tel: or external URL)
    return (
      <a href={to} className={finalClasses} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  // If 'to' is not provided, render as a generic button
  return (
    <button type="button" className={finalClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
