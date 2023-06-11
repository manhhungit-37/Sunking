import { memo, useMemo } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  InputGroup,
  InputRightElement,
  useBoolean,
  Button,
  Flex,
  Divider, 
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import ShowPasswordIcon from '@/assets/icons/ShowPasswordIcon';
import HidePasswordIcon from '@/assets/icons/HidePasswordIcon';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import CheckboxSignUp from '@/assets/icons/CheckboxSignUp';
import CheckboxSignUpEmpty from '@/assets/icons/CheckboxSignUpEmpty';
import useContain from '@/hooks/useContain';
import GoogleIcon from '@/assets/icons/GoogleIcon';

function AccountForm() {
  const [showPassword, setShowPassword] = useBoolean(false);
  const [showConfirmPassword, setShowConfirmPassword] = useBoolean(false);
  const { register, watch } = useFormContext();
  const password = watch('password');
  const { isContainNumber, isContainUppercase, isContainUnique } = useContain(password);

  return (
    <Box mt="24px">
      <Button variant="white" columnGap="8px" textTransform="uppercase" w="100%" h="56px">
        <FacebookIcon fontSize="24px" fill="trPrimary.50" />
        SIGN UP WITH FACEBOOK
      </Button>
      <Button variant="grey" columnGap="8px" textTransform="uppercase" w="100%" h="56px" mt="16px">
        <GoogleIcon fontSize="24px" fill="trGray.100" />
        SIGN UP WITH FACEBOOK
      </Button>
      <Flex align="center" my="24px" columnGap="24px">
        <Divider borderColor="trGray.200" />
        <Text
          fontSize="16px"
          lineHeight="24px"
          fontWeight={500}
          color="trGray.300"
        >
          Or
        </Text>
        <Divider borderColor="trGray.200" />
      </Flex>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" justifyContent="flex-end" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Email</Text>
          <Text color="trRed.50">*</Text>
        </FormLabel>
        <Input type="email" variant="outline" placeholder="test@test.com" maxW="500px" />
      </FormControl>
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
          <InputRightElement h="100%" px="10px">
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
          <InputRightElement h="100%" px="10px">
            <Button p="0px" bg="transparent" onClick={setShowPassword.toggle}>
              {showPassword ? <ShowPasswordIcon fontSize="24px" /> : <HidePasswordIcon fontSize="24px" />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button variant="primary" w="100%" mt="16px" h="56px">
        CREATE AN ACCOUNT
      </Button>
    </Box>
  );
};

export default memo(AccountForm);