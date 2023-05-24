import { Box, Divider, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import CustomTable from '@/components/CustomTable';
import { IData } from '../../types/job.types';

const data: IData[] = [
  { 
    id: 1,
    title: 'Consultant / Customer Care Employee Earning From 10 Million or More',
    expiredDate: '23/09/2023',
    appliedDate: '23/07/2023'
  },
  { 
    id: 2,
    title: 'Consultant / Customer Care Employee Earning From 10 Million or More',
    expiredDate: '23/09/2023',
    appliedDate: '23/07/2023'
  },
  { 
    id: 3,
    title: 'Consultant / Customer Care Employee Earning From 10 Million or More',
    expiredDate: '23/09/202CT2U',
    appliedDate: '23/07/2023'
  },
];

function JobApplied() {
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
      Header: 'Job Title',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={700}>{data.title}</Text>
        );
      }
    },
    {
      Header: 'Expired Posting Date',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={400}>{data.expiredDate}</Text>
        );
      }
    },
    {
      Header: 'Applied Date',
      Cell: (data: IData) => {
        return (
          <Text fontSize="16px" lineHeight="24px" fontWeight={400}>{data.appliedDate}</Text>
        );
      }
    }
  ], []);

  return (
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
        Job Appied
      </Text>
      <Divider borderColor="trGray.200" my="24px" />
      <CustomTable
        columns={columns}
        data={data}
      />
    </Box>
  );
}

export default JobApplied;