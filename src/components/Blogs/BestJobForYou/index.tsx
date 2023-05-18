import { Container, Box, Flex, Tag, TagLabel, Grid, GridItem } from '@chakra-ui/react';
import { useState, useMemo } from 'react';
import HeadingViewAll from '@/components/HeadingViewAll';
import Listing from '@/components/Listing';
import { useRouter } from 'next/router';
import { useJobs } from '@/contexts/JobsContext/JobsContext';
import { AppData } from '@/contexts/JobsContext/initialData';
import Pagination from '@/components/Pagination';

const LISTINGS_PER_PAGE = 12;

const addressList = [
  {
    id: 'hcm',
    name: 'Ho Chi Minh City',
  },
  {
    id: 'hn',
    name: 'Ha Noi',
  },
  {
    id: 'dn',
    name: 'Da Nang',
  },
  {
    id: 'north',
    name: 'North',
  },
];

function BestJobForYou() {
  const [address, setAddress] = useState('hcm');
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const { listings: listingsData, page } = useJobs() as AppData;

  const currentListings = useMemo(() => {
    return listingsData.slice(
      (page - 1) * LISTINGS_PER_PAGE,
      (page) * LISTINGS_PER_PAGE
    );
  }, [page, listingsData]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * LISTINGS_PER_PAGE;
    const lastPageIndex = firstPageIndex + LISTINGS_PER_PAGE;

    return listingsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, listingsData]);

  return (
    <Box bg="trPrimary.200">
      <Container py="80px">
        <HeadingViewAll url="#">
          <Box>
            <Box
              as="h2"
              color="trGray.500"
              fontSize="trH2"
              lineHeight="40px"
              fontWeight={700}
              mb="24px"
            >
              The Best Job Position For You
            </Box>
            <Flex gap="16px">
              {addressList.map((item) => (
                <Tag
                  key={item.id}
                  size={'lg'}
                  borderRadius="full"
                  variant="solid"
                  bg={address === item.id ? 'trPrimary.50' : 'trGray.400'}
                  color={address === item.id ? 'trGray.100' : 'trGray.300'}
                  px="20px"
                  py="6px"
                  zIndex={1}
                  cursor="pointer"
                  onClick={() => setAddress(item.id)}
                >
                  <TagLabel lineHeight="24px">{item.name}</TagLabel>
                </Tag>
              ))}
            </Flex>
          </Box>
        </HeadingViewAll>
        <Grid templateColumns="repeat(3, auto)" gap="24px" bg="#fff" borderRadius="12px" p="32px" my="40px">
          {currentTableData.map((listing, i) => (
            <GridItem key={listing.id}>
              <Listing
                tagged={currentListings[i].saved}
                data={listing}
                onClick={() => router.push(`/jobs/${listing.id}`)}
                rounded
                isDefaultRadius
              />
            </GridItem>
          ))}
        </Grid>
        <Pagination
          currentPage={currentPage}
          totalCount={listingsData.length}
          pageSize={LISTINGS_PER_PAGE}
          onPageChange={page => setCurrentPage(page)}
        />
      </Container>
    </Box>
  );
}

export default BestJobForYou;