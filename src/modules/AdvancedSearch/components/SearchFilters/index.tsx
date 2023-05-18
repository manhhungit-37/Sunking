import { useState } from 'react';
import {
  Box,
  Text,
  Input,
  Select as SelectChakra,
  Flex,
  HStack,
  Button,
} from '@chakra-ui/react';
import SearchIcon from '@/assets/icons/SearchIcon';
import Select from '@/components/Select';
import { locationSelect, roleSelect } from '@/constant/selectData';
import { useForm, Controller } from 'react-hook-form';

function SearchFilters() {
  const [filters, setFilters] = useState('');
  const { handleSubmit, reset, watch, control, register } = useForm({
    defaultValues: {
      role: roleSelect[0].text,
      location: locationSelect[0].text
    }
  });

  return (
    <Box
      px="2.5rem"
      py="16px"
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="trGray.400"
      maxW="1440px"
      mx="auto"
    >
      <Text color="trGray.300" mb="16px">Search advanced</Text>
      <Box
        p="5px"
        border="1px solid"
        borderColor="trGray.400"
        borderRadius="10px"
        boxShadow="base"
      >
        <Flex justify="space-between">

          <Flex align="center" gap="12px" p="8px 8px 8px 20px" w="40%">
            <Box>
              <SearchIcon fontSize="24px" />
            </Box>
            <Box w="100%">
              <Input
                placeholder="Search job title, key work or company ..."
                _placeholder={{ opacity: 1, color: 'trGray.300' }}
                onChange={(e) => setFilters(e.target.value)}
                value={filters}
                border="none"
                css={{
                  ':focus-visible': {
                    boxShadow: 'none'
                  }
                }}
              />
            </Box>
          </Flex>

          <HStack w="700px">
            <Controller
              render={
                ({ field }) => <Select
                  placeholder='...'
                  getKey={(item) => item.text}
                  getLabel={(item) => <Flex align="center" gap="4px">{item.icon} {item.text}</Flex>}
                  data={roleSelect}
                  {...field}
                />
              }
              control={control}
              name="role"
            />
            <Controller
              render={
                ({ field }) => <Select
                  placeholder='...'
                  getKey={(item) => item.text}
                  getLabel={(item) => <Flex align="center" gap="4px">{item.icon} {item.text}</Flex>}
                  data={locationSelect}
                  {...field}
                />
              }
              control={control}
              name="location"
            />
            <Button
              px="32px"
              py="12px"
            >
              Find a job
            </Button>
          </HStack>

        </Flex>
      </Box>
      <Flex gap="10px" mt="20px">
        <SelectChakra>
          <option value="option1">Position</option>
          <option value="option2">Position 2</option>
        </SelectChakra>

        <SelectChakra>
          <option value="option1">Date posted</option>
          <option value="option2">Date posted 2</option>
        </SelectChakra>

        <SelectChakra>
          <option value="option2">Year of exp</option>
          <option value="option2">Year of exp 2</option>
        </SelectChakra>
        <SelectChakra>
          <option value="option1">Industries</option>
          <option value="option2">Industries 2</option>
        </SelectChakra>

        <SelectChakra>
          <option value="option1">Level</option>
          <option value="option2">Level 2</option>
        </SelectChakra>

        <SelectChakra>
          <option value="option1">Salary</option>
          <option value="option2">Salary 2</option>
        </SelectChakra>
        <Button
          variant="ghost"
          color="trPrimary.50"
          lineHeight={1}
          onClick={() => setFilters('')}
        >
          Reset
        </Button>

      </Flex>
    </Box>
  );
}

export default SearchFilters;