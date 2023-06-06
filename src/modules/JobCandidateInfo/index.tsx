import { Box, Button, Divider, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useMemo } from 'react';
import CustomTable from '@/components/CustomTable';
import { IData } from './type/job.candidate.types';
import ApplyIcon from '@/assets/icons/ApplyIcon';
import CvIcon from '@/assets/icons/CvIcon';
import CheckboxSignUp from '@/assets/icons/CheckboxSignUp';
import CheckboxSignUpEmpty from '@/assets/icons/CheckboxSignUpEmpty';

const data: IData[] = [
  { 
    id: 1,
    name: 'John',
    information: [
      'improved airport travel experiences for disabled people',
      'significant improvements in rail and bus access',
      'greater awareness of the needs of disabled shoppers, and the production of support guides for retailers in how to provide accessible shopping experiences',
      'improved access to the countryside and to heritage sites',
      'awards for hoteliers in the provision of disabled facilities',
      'significant signposting in the insurance industry to products and services for customers with disabilities'
    ],
    select: true,
    note: [
      '...'
    ]
  },
  { 
    id: 2,
    name: 'John',
    information: [
      '...'
    ],
    select: false,
    note: [
      '...'
    ]
  },
  { 
    id: 3,
    name: 'John',
    information: [
      '...'
    ],
    select: false,
    note: [
      '...'
    ]
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
      Header: 'Infomation',
      Cell: (data: IData) => {
        return (
          <UnorderedList>
            {data.information.map((item, idx) => (
              <ListItem
                key={idx}
                fontSize="16px"
                lineHeight="24px"
                fontWeight={500}
                color="trGray.500"
              >
                {item}
              </ListItem> 
            ))}
          </UnorderedList>
        );
      }
    },
    {
      Header: 'CV (Attached file)',
      Cell: (data: IData) => {
        return (
          <Flex align="center" columnGap="4px" minW="230px">
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
    {
      Header: 'Select',
      Cell: (data: IData) => {
        return (
          <>
            {data.select ? (
              <CheckboxSignUp fontSize="20px" />
            ): (
              <CheckboxSignUpEmpty fontSize="20px" />
            )}
          </>
        );
      }
    },
    {
      Header: 'Note',
      Cell: (data: IData) => {
        return (
          <UnorderedList>
            {data.note.map((item, idx) => (
              <ListItem
                key={idx}
                fontSize="16px"
                lineHeight="24px"
                fontWeight={500}
                color="trGray.500"
              >
                {item}
              </ListItem> 
            ))}
          </UnorderedList>
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
            Job #1 Candiate Infomation
          </Text>
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