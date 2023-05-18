import { Icon, IconProps } from '@chakra-ui/react';

function CheckboxSignUpEmpty(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none"{...props}>
      <rect x="0.5" y="0.5" width="19" height="19" rx="2.5" stroke="#0B1111"/>
      <rect x="0.5" y="0.5" width="19" height="19" rx="2.5" stroke="#F7F9FA" stroke-opacity="0.7"/>
    </Icon>
  );
}

export default CheckboxSignUpEmpty;