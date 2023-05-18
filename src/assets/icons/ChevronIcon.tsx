import { Icon, IconProps } from '@chakra-ui/react';

function ChevronIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 10 6" fill="#1852B4" fillRule="evenodd" clipRule="evenodd" {...props}>
      <path d="M9.78033 0.46967C10.0732 0.762563 10.0732 1.23744 9.78033 1.53033L5.78033 5.53033C5.48744 5.82322 5.01256 5.82322 4.71967 5.53033L0.71967 1.53033C0.426777 1.23744 0.426777 0.762564 0.71967 0.46967C1.01256 0.176777 1.48744 0.176777 1.78033 0.46967L5.25 3.93934L8.71967 0.46967C9.01256 0.176777 9.48744 0.176777 9.78033 0.46967Z"/>
    </Icon>
  );
}

export default ChevronIcon;