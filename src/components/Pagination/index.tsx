import React from 'react';
import { usePagination, IPagination } from '@/hooks/usePagination';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface IProps extends IPagination {
  onPageChange: (page: number) => void;
}

const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }: IProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize
  });

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage * pageSize > totalCount) return;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Box mx="auto">
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
          bg={currentPage === 1 ? 'trWhite' : 'trPrimary.50'}
          border="2px solid"
          borderColor={currentPage === 1 ? 'trWhite' : 'trBlue.100'}
          color={currentPage === 1 ? 'trBlack.50' : 'trWhite'}
          opacity={currentPage === 1 ? '0.75' : '1'}
          cursor={currentPage === 1 ? 'default' : 'pointer'}
          icon={<ChevronLeftIcon bg="none" w="6" h="6" />}
          aria-label="Previous page"
          onClick={onPrevious}
        />
        <Flex columnGap="16px" justify="left" align="center">
          {paginationRange.map((value, i) => {
            return (
              <Box
                key={i}
                bg={currentPage === value ? 'trPrimary.50' : 'gray.500'}
                w={currentPage === value ? '18px' : '12px'}
                minW={currentPage === value ? '18px' : '12px'}
                h={currentPage === value ? '18px' : '12px'}
                borderRadius="full"
              ></Box>
            );
          })}
        </Flex>
        <IconButton
          w="32px"
          h="40px"
          borderRadius="full"
          bg={currentPage === lastPage ? 'trWhite' : 'trPrimary.50'}
          border="2px solid"
          borderColor={currentPage === lastPage ? 'trWhite' : 'trBlue.100'}
          color={currentPage === lastPage ? 'trBlack.50' : 'trWhite'}
          opacity={currentPage === lastPage ? '0.75' : '1'}
          cursor={currentPage === lastPage ? 'default' : 'pointer'}
          icon={<ChevronRightIcon w="6" h="6" />}
          aria-label="Next page"
          onClick={onNext}
        />
      </Flex>
    </Box>
  );
};

export default Pagination;
