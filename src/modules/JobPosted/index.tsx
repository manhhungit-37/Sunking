import { Box, Divider, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useMemo } from 'react';
import CustomTable from '@/components/CustomTable';
import { IData } from './types/jobs.posted.types';
import EditTableIcon from '@/assets/icons/EditTableIcon';

const data: IData[] = [
  { 
    id: 1,
    position: 'Luxury townhouse sales and rental consultant - no experience required',
    description: [
      'Exploit customer information through data provided by the company combined with additional search (accompanied by a leader).',
      'Set up calls, consult customers on available products and services such as website design, hosting, digital marketing services,... Management will support accompanying in the consultation process.',
      'Support and take care of customers in the process of using the product to achieve the best use efficiency and advise on product upgrade.',
      'Make reports by day/week/month.'
    ],
    expired: '20/03/2023',
  },
  { 
    id: 2,
    position: 'Consultants do not require experience (working in an office)',
    description: [
      '...'
    ],
    expired: '20/03/2023',
  },
  { 
    id: 3,
    position: 'Office staff - no experience required',
    description: [
      '...'
    ],
    expired: '20/03/2023',
  },
  { 
    id: 4,
    position: 'Website consultant - no experience required',
    description: [
      '...'
    ],
    expired: '20/03/2023',
  },
];

function JobCandidateInfo() {
  const columns = useMemo(() => [
    {
      Header: '#',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.id}</Text>
        );
      }
    },
    {
      Header: 'Posted Position',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.position}</Text>
        );
      }
    },
    {
      Header: 'General Description',
      Cell: (data: IData) => {
        return (
          <Box>
            {data.description.map((item, idx) => (
              <Flex key={idx} columnGap="10px">
                <Text>-</Text>
                <Box
                  key={idx}
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight={500}
                  color="trGray.500"
                >
                  {item}
                </Box> 
              </Flex>
            ))}
          </Box>
        );
      }
    },
    {
      Header: 'Expired',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.expired}</Text>
        );
      }
    },
    {
      Header: 'Edit',
      Cell: (data: IData) => {
        return (
          <EditTableIcon fontSize="20px" />
        );
      }
    },
  ], []);

  return (
    <Box bg="trPrimary.200">
      <Box maxW="1440px" mx="auto" px="2.5rem" py="40px">
        <Box
          bg="trWhite"
          borderRadius="8px"
          p="24px"
          mb="40px"
        >
          <Flex align="end" columnGap="40px">
            <Text
              fontSize="32px"
              lineHeight="40px"
              fontWeight={700}
              color="trGray.500"
            >
              Job Posted
            </Text>
            <Flex align="center" columnGap="24px">
              <Flex columnGap="5px">
                <Text fontSize="16px" lineHeight="24px" fontWeight={700}>Total post:</Text>
                <Text fontSize="16px" lineHeight="24px" fontWeight={500}>20</Text>
              </Flex>
              <Flex columnGap="5px">
                <Text fontSize="16px" lineHeight="24px" fontWeight={700}>Used:</Text>
                <Text fontSize="16px" lineHeight="24px" fontWeight={500}>12</Text>
              </Flex>
              <Flex columnGap="5px">
                <Text fontSize="16px" lineHeight="24px" fontWeight={700}>Remain:</Text>
                <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trRed.50">8</Text>
              </Flex>
            </Flex>
          </Flex>
          <Divider borderColor="trGray.200" my="24px" />
          <CustomTable
            columns={columns}
            data={data}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default JobCandidateInfo;