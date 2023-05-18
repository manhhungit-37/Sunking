import ArrowRightIcon from '@/assets/icons/ArrowRightIcon';
import { Flex, Box } from '@chakra-ui/react';
import Link from 'next/link';

interface IProps {
  children: React.ReactNode;
  url: string;
}

function HeadingViewAll({ children, url }: IProps) {
  return (
    <Flex justify="space-between" align="center" color="trGray.500">
      {children}
      <Link href={url}>
        <Flex columnGap="4px" align="center">
          <Box
            fontSize="16px"
            fontWeight={700}
            lineHeight="20px"
            color="trPrimary.50"
            textDecoration="underline"
          >
            View all
          </Box>
          <ArrowRightIcon />
        </Flex>
      </Link>
    </Flex>
  );
}

export default HeadingViewAll;