import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';

interface Props {
  pages: number;
  activePage: number;
  setPage: (page: number) => void;
}

export default function Paginator({ pages, activePage, setPage }: Props) {
  const nextPage = () => {
    if (activePage < pages) {
      setPage(activePage + 1);
    }
  };

  const previousPage = () => {
    if (activePage > 1) {
      setPage(activePage - 1);
    }
  };

  return (
    <Box maxW="360px" mx="auto">
      <Flex
        direction="row"
        w="100%"
        justifyContent="center"
        alignItems="center"
        mt="40px"
        gap="16px"
      >
        <IconButton
          w="32px"
          h="40px"
          borderRadius="full"
          bg={activePage === 1 ? 'trWhite' : 'trPrimary.50'}
          border="2px solid"
          borderColor={activePage === 1 ? 'trWhite' : 'trBlue.100'}
          color={activePage === 1 ? 'trBlack.50' : 'trWhite'}
          opacity={activePage === 1 ? '0.75' : '1'}
          cursor={activePage === 1 ? 'default' : 'pointer'}
          icon={<ChevronLeftIcon bg="none" w="6" h="6" />}
          aria-label="Previous page"
          onClick={previousPage}
        />
        <Flex maxW="360px" overflowX="scroll" columnGap="16px" justify="left" align="center">
          {[...Array(pages)].map((_, i) => {
            return (
              <Box
                key={i}
                bg={activePage === i + 1 ? 'trPrimary.50' : 'gray.500'}
                w={activePage === i + 1 ? '18px' : '12px'}
                minW={activePage === i + 1 ? '18px' : '12px'}
                h={activePage === i + 1 ? '18px' : '12px'}
                borderRadius="full"
              ></Box>
            );
          })}
        </Flex>
        <IconButton
          w="32px"
          h="40px"
          borderRadius="full"
          bg={activePage === pages ? 'trWhite' : 'trPrimary.50'}
          border="2px solid"
          borderColor={activePage === pages ? 'trWhite' : 'trBlue.100'}
          color={activePage === pages ? 'trBlack.50' : 'trWhite'}
          opacity={activePage === pages ? '0.75' : '1'}
          cursor={activePage === pages ? 'default' : 'pointer'}
          icon={<ChevronRightIcon w="6" h="6" />}
          aria-label="Next page"
          onClick={nextPage}
        />
      </Flex>
    </Box>
  );
}
