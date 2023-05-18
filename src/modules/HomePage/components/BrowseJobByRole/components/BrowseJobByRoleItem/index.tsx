import { Box, Flex, useBoolean } from '@chakra-ui/react';
import BagActiveIcon from '@/assets/icons/BagActiveIcon';
import BagIcon from '@/assets/icons/BagIcon';

interface IProps {
  text: string;
  desc: string;
};

function BrowseJobByItem({ text, desc }: IProps) {
  const [isHover, setIsHover] = useBoolean();

  return (
    <Flex
      p="24px"
      align="center"
      columnGap="16px"
      bg={isHover ? 'trPrimary.50' : 'trPrimary.200'}
      borderRadius="8px"
      cursor="pointer"
      onMouseEnter={setIsHover.on}
      onMouseLeave={setIsHover.off}
    >
      {!isHover ? <BagIcon fontSize="40px" /> : <BagActiveIcon fontSize="40px" />}
      <Box color={isHover ? 'trGray.100' : 'trGray.500'}>
        <Box fontSize="trH4" lineHeight="32px" fontWeight={700} mb="8px">
          {text}
        </Box>
        <Box fontSize="trNormal" lineHeight="24px" fontWeight={500}>{desc}</Box>
      </Box>
    </Flex>
  );
}

export default BrowseJobByItem;