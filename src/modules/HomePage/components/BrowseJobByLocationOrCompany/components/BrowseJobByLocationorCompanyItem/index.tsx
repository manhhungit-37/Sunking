import { StaticImageData } from 'next/image';
import { Flex, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon';

interface IProps {
  icon: string | StaticImageData;
  name: string;
  desc: string;
  url: string;
}

function BrowseJobByLocationOrCompanyItem({ icon, name, desc, url }: IProps) {
  return (
    <Flex
      justify="space-between"
      align="center"
      p="16px"
      borderWidth="1px"
      borderColor="trGray.200"
      borderRadius="8px"
    >
      <Flex columnGap="16px">
        <Box width="72px" height="72px" pos="relative">
          <Image src={icon} alt={name} fill sizes="72px" />
        </Box>
        <Box>
          <Box
            fontSize="trNormal"
            lineHeight="24px"
            fontWeight={700}
            color="trGray.500"
          >
            {name}
          </Box>
          <Box fontSize="trThin" lineHeight="20px" fontWeight={500} mt="8px" color="trGray.300">
            {desc}
          </Box>
        </Box>
      </Flex>
      <Link href={url}>
        <Flex columnGap="4px" align="center">
          <Box
            fontSize="trNormal"
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

export default BrowseJobByLocationOrCompanyItem;