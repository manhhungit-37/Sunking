import { memo } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  RadioGroup,
  Radio,
  Select, 
  Checkbox,
  Flex,
  Button} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import ShowPasswordIcon from '@/assets/icons/ShowPasswordIcon';
import HidePasswordIcon from '@/assets/icons/HidePasswordIcon';
import Link from 'next/link';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import DocumentCompleteIcon from '@/assets/icons/DocumentCompleteIcon';

function EmployerInfomationForm() {
  const { register } = useFormContext();

  return (
    <Box mt="24px">
      <Box fontSize="24px" lineHeight="32px" fontWeight={700}>Employer infomation</Box>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Full name</Text>
          <Text color="trRed.50">*</Text>
        </FormLabel>
        <Input type="text" variant="outline" placeholder="..." maxW="500px" />
      </FormControl>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Number phone</Text>
          <Text color="trRed.50">*</Text>
        </FormLabel>
        <Input type="number" variant="outline" placeholder="..." maxW="500px" />
      </FormControl>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Sex</Text>
        </FormLabel>
        <RadioGroup defaultValue='male' w="100%" maxW="500px">
          <Stack spacing={4} direction='row'>
            <Radio value='male'>
              Male
            </Radio>
            <Radio value='female'>Female</Radio>
            <Radio value='other'>Other</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Bussiness name</Text>
        </FormLabel>
        <Input type="text" variant="outline" placeholder="..." maxW="500px" />
      </FormControl>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Role</Text>
        </FormLabel>
        <Select
          cursor="pointer"
          defaultValue="senior-hr"
          maxW="500px"
        >
          <option value="senior-hr">Senior Hr</option>
        </Select>
      </FormControl>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Location</Text>
        </FormLabel>
        <Flex columnGap="24px" w="100%" maxW="500px">
          <Select
            cursor="pointer"
            defaultValue="hcm"
          >
            <option value="hcm">Ho Chi Minh City</option>
          </Select>
          <Select
            cursor="pointer"
            defaultValue="govap"
          >
            <option value="govap">Go vap</option>
          </Select>
        </Flex>
      </FormControl>
      <Checkbox fontWeight={500} my="24px">
        <Text as="span">I agree to Job Seeker</Text> 
        <Text as="span" color='trPrimary.50' textDecoration="underline">
          <Link href="#"> Terms of Service.</Link>
        </Text>
      </Checkbox>
      <Flex gap="12px">
        <Button variant="red">
          <DeleteIcon fontSize="24px" mr="12px" /> Cancel
        </Button>
        <Button variant="primary" width="100%">
          <DocumentCompleteIcon fontSize="24px" mr="12px" /> COMPLETE
        </Button>
      </Flex>
    </Box>
  );
};

export default memo(EmployerInfomationForm);