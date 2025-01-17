import React from 'react';

const ExternalIcon = ({ squared, className }) => {
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
        transform='translate(3 3)'
      >
        <path d='m15.5.5v5h-5' transform='matrix(1 0 0 -1 0 6)' />
        <path
          d='m12-.95v9.9'
          transform='matrix(.70710678 .70710678 -.70710678 .70710678 6.343146 -7.313708)'
        />
        <path d='m7.5.5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h11c1.1045695 0 2-.8954305 2-2v-4' />
      </g>
    </svg>
  );
};

export default ExternalIcon;
