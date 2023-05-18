import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

import TriggerIcon from '@/assets/icons/TriggerIcon';

interface IProps {
  url: string;
  children: string | React.ReactNode;
}

function FooterLink({ url, children }: IProps) {
  return (
    <Link href={url}>
      <Flex gap="8px" align="center">
        {children}
        <TriggerIcon fontSize="20px" />
      </Flex>
    </Link>
  );
}

export default FooterLink;