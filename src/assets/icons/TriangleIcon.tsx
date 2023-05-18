import { Icon, IconProps } from '@chakra-ui/react';

function TriangleIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 14 18" fill="white" {...props}>
      <path d="M0 17.5V0L14 8L0 17.5Z"/>
    </Icon>
  );
}

export default TriangleIcon;