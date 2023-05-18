import { Box, Text, Divider, FormControl, FormLabel, Input, Textarea, RadioGroup, Stack, Radio, Select, Flex, Button } from '@chakra-ui/react';
import UploadIcon from '@/assets/icons/UploadIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import SaveIcon from '@/assets/icons/SaveIcon';

function JobInformationForm() {
  return (
    <Box
      bg="trWhite"
      borderRadius="8px"
      p="24px"
      mt="40px"
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
      <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="trGray.500" mt="24px" mb="16px">
        <Text as="span" fontWeight={700}>Post day</Text>
        <Text as="span">: 28/3/2023</Text>
      </Text>
      <FormControl alignItems="flex-start">
        <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" justifyContent="right" mr="24px" mt="20px">
          <Text>Job detail</Text>
          <Text color="trRed.50">*</Text>
        </FormLabel>
        <Textarea placeholder='...' />
      </FormControl>
      <FormControl alignItems="flex-start">
        <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mt="20px" mr="24px">Job requirment</FormLabel>
        <Textarea placeholder='...' />
      </FormControl>
      <FormControl alignItems="flex-start">
        <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mt="20px" mr="24px">Benefit</FormLabel>
        <Textarea placeholder='...' />
      </FormControl>
      <Box maxW="544px">
        <FormControl>
          <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mr="24px">Benefit</FormLabel>
          <Input
            type="date"
            placeholder='28/3/2023'
            defaultValue="2011-09-29"
            sx={{
              '::-webkit-calendar-picker-indicator': {
                background: 'url(/svg/calendar.svg) center/80% no-repeat',
                color: 'black',
                width: '24px',
                height: '24px'
              }
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="trGray.300" fontSize={14} lineHeight="20px" mr="24px" mb="0px" minW="120px" textAlign="right">
            Sex
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
        <FormControl>
          <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mr="24px">Location</FormLabel>
          <Select>
            <option>Ho Chi Minh City</option>
            <option>Ha Noi</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mr="24px">Level</FormLabel>
          <Select>
            <option>Junior</option>
            <option>Senior</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={14} lineHeight="20px" color="trGray.300" minW="120px" textAlign="right" mr="24px">Industry</FormLabel>
          <Select>
            <option>Full-time</option>
            <option>Part-time</option>
          </Select>
        </FormControl>
        <FormControl justifyContent="flex-end">
          <FormLabel fontSize={14} lineHeight="20px" minW="120px" color="trGray.300" textAlign="right" mr="24px">
            Address
          </FormLabel>
          <Input type="text" variant="outline" placeholder="..." />
        </FormControl>
        <FormControl justifyContent="flex-end">
          <FormLabel fontSize={14} lineHeight="20px" minW="120px" color="trGray.300" textAlign="right" mr="24px">
            Employer type
          </FormLabel>
          <Input type="text" variant="outline" placeholder="..." />
        </FormControl>
        <FormControl justifyContent="flex-end">
          <FormLabel fontSize={14} lineHeight="20px" minW="120px" color="trGray.300" textAlign="right" mr="24px">
            Experience
          </FormLabel>
          <Input type="text" variant="outline" placeholder="..." />
        </FormControl>
        <FormControl justifyContent="flex-end">
          <FormLabel fontSize={14} lineHeight="20px" minW="120px" color="trGray.300" textAlign="right" mr="24px">
            Job Type
          </FormLabel>
          <Input type="text" variant="outline" placeholder="..." />
        </FormControl>
        <FormControl justifyContent="flex-end">
          <FormLabel fontSize={14} lineHeight="20px" minW="120px" color="trGray.300" textAlign="right" mr="24px">
            Quanity
          </FormLabel>
          <Input type="text" variant="outline" placeholder="1-5" />
        </FormControl>
        <FormControl justifyContent="flex-end">
          <FormLabel fontSize={14} lineHeight="20px" minW="120px" color="trGray.300" textAlign="right" mr="24px">
            Salary range
          </FormLabel>
          <Input type="text" variant="outline" placeholder="$1000.00" />
        </FormControl>
      </Box>
      <Flex justify="flex-end" gap="12px" height="44px" mt="24px">
        <Button variant="red">
          <DeleteIcon fontSize="24px" mr="12px" /> Cancel
        </Button>
        <Button variant="grey">
          <SaveIcon fontSize="24px" mr="8px" /> Save as draft
        </Button>
        <Button variant="primary" px="78px">
          <UploadIcon fontSize="24px" mr="12px" /> Publish
        </Button>
      </Flex>
    </Box>
  );
}

export default JobInformationForm;