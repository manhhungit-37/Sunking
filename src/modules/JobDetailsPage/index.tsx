import { Box, Flex, Text, Tag, TagLabel, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ListingData } from '@/constant/listings';
import SearchFilters from '@/modules/AdvancedSearch/components/SearchFilters';
import Breadcrumbs from '@/components/Breadcrumbs';
import JobFullDeatils from './components/JobFullDetails';
import JobDetails from '@/components/JobDetails';
import BottomSection from './components/BottomSection';
import { useJobs } from '@/contexts/JobsContext/JobsContext';
import Listing from '@/components/Listing';

function JobDetailsPage() {
  const router = useRouter();
  const listingsData = useJobs()?.listings as ListingData[];
  const { jid } = router.query;

  const job = listingsData.find((listing) => listing.id === jid);
  const listJobRelated = listingsData.slice(0, 3);

  return (
    <Box>
      {job && (
        <>
          <SearchFilters />
          <Breadcrumbs />
          <Box bg="trPrimary.200">
            <Box maxW="1440px" mx="auto" px="2.5rem" py="40px">
              <Flex align="flex-start" gap="40px">
                <Flex direction="column" gap="24px" w="63%" minWidth="296px">
                  <Box bg="trWhite" p="24px" borderRadius="8px" border="1px solid" borderColor="trGray.400">
                    <JobFullDeatils activeListing={job} />
                  </Box>

                  <Box bg="trWhite" p="24px" borderRadius="8px" border="1px solid" borderColor="trGray.400">
                    <JobDetails
                      title="Job Description"
                      detailsList={['...', '...', '...']}
                    />
                    <JobDetails
                      title="Job Requirements"
                      detailsList={['...', '...', '...']}
                    />
                    <JobDetails
                      title="Benefits"
                      detailsList={['...', '...', '...']}
                    />
                  </Box>
        
                  <Box bg="trWhite" p="24px" borderRadius="8px" border="1px solid" borderColor="trGray.400">
                    <Text fontWeight={700} fontSize="24px" lineHeight="32px" mb="16px">
                      Tags
                    </Text>

                    <HStack spacing={4}>
                      {job.tags.map((tag,i) => (
                        <Tag
                          size={'lg'}
                          key={tag + i as string}
                          borderRadius="full"
                          variant="solid"
                          bg="trBlue.75"
                          color="trPrimary.50"
                          px="20px"
                          py="6px"
                        >
                          <TagLabel>{tag}</TagLabel>
                        </Tag>
                      ))}
                    </HStack>
                  </Box>

                  <Box bg="trWhite" p="24px" borderRadius="8px" border="1px solid" borderColor="trGray.400">
                    <JobDetails
                      title="About Company"
                      detailsList={['...', '...', '...']}
                    />
                  </Box>
                </Flex>

                <Flex direction="column" gap="24px" minWidth="10px" flex={1}>
                  <Box bg="trWhite" p="24px" borderRadius="8px" border="1px solid" borderColor="trGray.400">
                    <Text mb='24px' fontSize='22px' lineHeight="28px" fontWeight={600} color="trGray.500">
                      Other jobs from this company
                    </Text>
                    <Flex direction="column">
                      {listJobRelated.map((listing, i) => (
                        <Link key={listing.id} href={`/jobs/${listing.id}`}>
                          <Listing
                            tagged={listJobRelated[i].saved}
                            data={listing}
                          />
                        </Link>
                      ))}
                    </Flex>
                  </Box>

                  <Box bg="trWhite" p="24px" borderRadius="8px" border="1px solid" borderColor="trGray.400">
                    <Text mb='24px' fontSize='22px' lineHeight="28px" fontWeight={600} color="trGray.500">
                      Similar jobs
                    </Text>
                    <Flex direction="column">
                      {listJobRelated.map((listing, i) => (
                        <Link key={listing.id} href={`/jobs/${listing.id}`}>
                          <Listing
                            tagged={listJobRelated[i].saved}
                            data={listing}
                          />
                        </Link>
                      ))}
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
          <BottomSection activeListing={job} />
        </>
      )}
    </Box>
  );
}

export default JobDetailsPage;
