import React from 'react';

const VideoIcon = ({ squared, className }) => {
  return (
    <svg
      height={squared}
      width={squared}
      className={className}
      viewBox='0 0 21 21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m2.5.5h6c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2v-4c0-1.1045695.8954305-2 2-2zm8 3 2.4-1.8c.4418278-.33137085 1.0686292-.2418278 1.4.2.1298221.17309617.2.38362979.2.6v4c0 .55228475-.4477153 1-1 1-.2163702 0-.4269038-.07017787-.6-.2l-2.4-1.8z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(3 6)'
      />
    </svg>
  );
};

export default VideoIcon;
