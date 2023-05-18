import { Box, Flex } from '@chakra-ui/react';

interface IProps {
  name: string;
  desc: string;
  totalMoreData: string;
}

function ViewAllBox({ name, desc, totalMoreData }: IProps) {
  return (
    <Flex
      justify="space-between"
      align="center"
      p="16px"
      borderWidth="1px"
      borderColor="trGray.200"
      borderRadius="8px"
    >
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
      <Box
        fontSize="trH4"
        fontWeight={700}
        lineHeight="32px"
        color="trGray.500"
      >
        {totalMoreData}
      </Box>
    </Flex>
  );
}

export default ViewAllBox;