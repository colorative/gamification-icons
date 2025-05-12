import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const SocialPost: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 8V12M12 16V12M12 12H8M12 12H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SocialPost; 