import { IconProps, Icon } from '@chakra-ui/react';

function PotentialActiveIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 64 64" fill="none" {...props}>
      <rect width="64" height="64" rx="32" fill="#0B1111"/>
      <rect width="64" height="64" rx="32" fill="#F7F9FA"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.8335 31.9999C17.8335 24.1759 24.1761 17.8333 32.0002 17.8333C39.8242 17.8333 46.1668 24.1759 46.1668 31.9999C46.1668 39.824 39.8242 46.1666 32.0002 46.1666C24.1761 46.1666 17.8335 39.824 17.8335 31.9999ZM33.2502 23.6666C33.2502 22.9762 32.6905 22.4166 32.0002 22.4166C31.3098 22.4166 30.7502 22.9762 30.7502 23.6666V31.9999C30.7502 32.4309 30.9722 32.8315 31.3377 33.0599L36.3377 36.1849C36.9231 36.5508 37.6943 36.3728 38.0602 35.7874C38.426 35.202 38.2481 34.4308 37.6627 34.0649L33.2502 31.3071V23.6666Z" fill="#1852B4"/>
    </Icon>
  );
}

export default PotentialActiveIcon;