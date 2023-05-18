import { Icon, IconProps } from '@chakra-ui/react';

function CheckboxSignUp(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <rect x="0.5" y="0.5" width="19" height="19" rx="2.5" fill="#1852B4"/>
      <path d="M6 11C6 11 8.5 14 9.5 14C10.5 14 14 6 14 6" stroke="#0B1111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 11C6 11 8.5 14 9.5 14C10.5 14 14 6 14 6" stroke="#F7F9FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="0.5" y="0.5" width="19" height="19" rx="2.5" stroke="#1852B4"/>
      <rect x="0.5" y="0.5" width="19" height="19" rx="2.5" stroke="white" stroke-opacity="0.5"/>
    </Icon>
  );
}

export default CheckboxSignUp;