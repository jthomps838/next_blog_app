import React from 'react';

const PlusIcon = ({ squared, className }) => {
  return (
    <svg
      height={squared}
      width={squared}
      className={className}
      viewBox='0 0 21 21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        fill='none'
        fillRule='evenodd'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='m5.5 10.5h10' />
        <path d='m10.5 5.5v10' />
      </g>
    </svg>
  );
};

export default PlusIcon;
