import { memo, useMemo } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  Checkbox,
  InputGroup,
  InputRightElement,
  useBoolean,
  Button,
  Flex, 
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import ShowPasswordIcon from '@/assets/icons/ShowPasswordIcon';
import HidePasswordIcon from '@/assets/icons/HidePasswordIcon';
import CheckboxSignUp from '@/assets/icons/CheckboxSignUp';
import CheckboxSignUpEmpty from '@/assets/icons/CheckboxSignUpEmpty';
import useContain from '@/hooks/useContain';

function AccountForm() {
  const [showPassword, setShowPassword] = useBoolean(false);
  const [showConfirmPassword, setShowConfirmPassword] = useBoolean(false);
  const { register, watch } = useFormContext();
  const password = watch('password');
  const { isContainNumber, isContainUppercase, isContainUnique } = useContain(password);

  return (
    <Box mt="24px">
      <Box fontSize="24px" lineHeight="32px" fontWeight={700}>Account</Box>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" justifyContent="flex-end" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Email</Text>
          <Text color="trRed.50">*</Text>
        </FormLabel>
        <Input type="email" variant="outline" placeholder="test@test.com" maxW="500px" />
      </FormControl>
      <Text
        w="calc(100% - 128px)"
        maxW="500px"
        fontSize="12px"
        lineHeight="16px"
        fontWeight={500}
        color="trGray.300"
        mt="8px"
        ml="auto"
      >
        *Jobseeker recommends registering by company email (by domain name, company website) for fast browsing support & unlimited posting.
      </Text>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" justifyContent="flex-end" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Password</Text>
          <Text color="trRed.50">*</Text>
        </FormLabel>
        <InputGroup size='md' maxW="500px">
          <Input
            type={showPassword ? 'text' : 'password'}
            variant="outline"
            placeholder="*****************"
            {...register('password')}
          />
          <InputRightElement>
            <Button p="0px" bg="transparent" onClick={setShowPassword.toggle}>
              {showPassword ? <ShowPasswordIcon fontSize="24px" /> : <HidePasswordIcon fontSize="24px" />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Stack maxW="500px" ml="auto" mt="10px">
        <Flex align="center" columnGap="12px">
          {isContainNumber ? <CheckboxSignUp fontSize={20} /> : <CheckboxSignUpEmpty fontSize={20} />}
          <Text>Number</Text>
        </Flex>
        <Flex align="center" columnGap="12px">
          {isContainUppercase ? <CheckboxSignUp fontSize={20} /> : <CheckboxSignUpEmpty fontSize={20} />}
          <Text>Capital character</Text>
        </Flex>
        <Flex align="center" columnGap="12px">
          {isContainUnique ? <CheckboxSignUp fontSize={20} /> : <CheckboxSignUpEmpty fontSize={20} />}
          <Text>Unique character</Text>
        </Flex>
      </Stack>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" justifyContent="flex-end" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Confirm Password</Text>
        </FormLabel>
        <InputGroup size='md' maxW="500px">
          <Input
            type={showPassword ? 'text' : 'password'}
            variant="outline"
            placeholder="*****************"
          />
          <InputRightElement>
            <Button p="0px" bg="transparent" onClick={setShowPassword.toggle}>
              {showPassword ? <ShowPasswordIcon fontSize="24px" /> : <HidePasswordIcon fontSize="24px" />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default memo(AccountForm);