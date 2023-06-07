import { Box, Divider, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useMemo } from 'react';
import CustomTable from '@/components/CustomTable';
import { IData } from '../../types/source-candidate.types';
import EditTableIcon from '@/assets/icons/EditTableIcon';
import CvIcon from '@/assets/icons/CvIcon';

const data: IData[] = [
  { 
    id: 1,
    name: 'John',
    title: 'Designer',
    role: 'Designer',
    location: 'Ha Noi',
    datePosted: '23/03/23',
    exp: '7 Years',
    industries: 'Full time',
    positionLevel: 'Intern',
    salary: '$1000',
  },
  { 
    id: 2,
    name: 'John',
    title: 'Designer',
    role: 'Designer',
    location: 'HCM',
    datePosted: '23/03/23',
    exp: '7 Years',
    industries: 'Full time',
    positionLevel: 'Intern',
    salary: '$1000',
  },
  { 
    id: 3,
    name: 'John',
    title: 'Designer',
    role: 'Designer',
    location: 'Ha Noi',
    datePosted: '23/03/23',
    exp: '7 Years',
    industries: 'Full time',
    positionLevel: 'Intern',
    salary: '$1000',
  },
  { 
    id: 4,
    name: 'John',
    title: 'Designer',
    role: 'Designer',
    location: 'Da Nang',
    datePosted: '23/03/23',
    exp: '7 Years',
    industries: 'Full time',
    positionLevel: 'Intern',
    salary: '$1000',
  },
  { 
    id: 5,
    name: 'John',
    title: 'Designer',
    role: 'Designer',
    location: 'Ha Noi',
    datePosted: '23/03/23',
    exp: '7 Years',
    industries: 'Full time',
    positionLevel: 'Intern',
    salary: '$1000',
  },
];

function SourceCandidateTable() {
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
      Header: 'Name',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={700} color="trGray.500">{data.name}</Text>
        );
      }
    },
    {
      Header: 'Title',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.title}</Text>
        );
      }
    },
    {
      Header: 'Role',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.role}</Text>
        );
      }
    },
    {
      Header: 'Location',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.location}</Text>
        );
      }
    },
    {
      Header: 'Date posted',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.datePosted}</Text>
        );
      }
    },
    {
      Header: 'EXP',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500" minW="60px">{data.exp}</Text>
        );
      }
    },
    {
      Header: 'Industries',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.industries}</Text>
        );
      }
    },
    {
      Header: 'Position level',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.positionLevel}</Text>
        );
      }
    },
    {
      Header: 'Salary range',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500">{data.salary}</Text>
        );
      }
    },
    {
      Header: 'CV (Attached file)',
      Cell: (data: IData) => {
        return (
          <Flex align="center" columnGap="4px" minW="180px">
            <CvIcon fontSize="24px" />
            <Text
              fontSize="16px"
              lineHeight="24px"
              fontWeight={500}
              color="trPrimary.50"
            >
              CV (attached file)
            </Text>
          </Flex>
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
          <Text
            fontSize="32px"
            lineHeight="40px"
            fontWeight={700}
            color="trGray.500"
          >
            Source Candidates
          </Text>
          <Divider borderColor="trGray.200" my="24px" />
          <CustomTable
            variant='even'
            columns={columns}
            data={data}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SourceCandidateTable;