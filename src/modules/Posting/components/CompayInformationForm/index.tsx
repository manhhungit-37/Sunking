import { useState } from 'react';
import UploadAvatar from '@/components/UploadAvatar';
import { Box, Divider, FormControl, FormLabel, Text, Flex, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function CompanyInformationForm() {
  const { register } = useFormContext();
  const [value, setValue] = useState<any>();

  return (
    <Box
      bg="trWhite"
      borderRadius="8px"
      p="24px"
    >
      <Text
        as="h2"
        fontSize="32px"
        lineHeight="40px"
        fontWeight={700}
        mb="24px"
        color="trGray.500"
      >
        Company Infomation
      </Text>
      <Divider borderColor="trGray.200" />
      <FormControl p="0px">
        <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mr="24px">Logo</FormLabel>
        <UploadAvatar {...register('avatar')} />
      </FormControl>
      <Flex columnGap="16px">
        <FormControl p="0px">
          <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" justifyContent="right" mr="24px">
            <Text>Company name</Text>
            <Text color="trRed.50">*</Text>
          </FormLabel>
          <Input type="text" variant="outline" placeholder='Jill Morgan' />
        </FormControl>
        <FormControl p="0px">
          <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mr="24px">Address</FormLabel>
          <Input type="text" variant="outline" placeholder='13 Cach Mang Thang 8, District 1, HCMC' />
        </FormControl>
      </Flex>
      <Flex columnGap="16px">
        <FormControl p="0px">
          <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mr="24px">Phone number</FormLabel>
          <PhoneInput
            country={'vn'}
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            inputStyle={{
              width: '100%',
              height: '44px',
              borderWidth: '2px',
              borderColor: '#ebedee',
            }}
            buttonStyle={{
              borderWidth: '2px',
              borderColor: '#ebedee',
            }}
          />
        </FormControl>
        <FormControl p="0px">
          <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mr="24px">Email</FormLabel>
          <Input type="text" variant="outline" placeholder='thietke.huutri@gmail.com' />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default CompanyInformationForm;