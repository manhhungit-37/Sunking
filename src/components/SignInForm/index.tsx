import { memo } from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  useBoolean,
  Button } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import ShowPasswordIcon from '@/assets/icons/ShowPasswordIcon';
import HidePasswordIcon from '@/assets/icons/HidePasswordIcon';

function SignInForm() {
  const [showPassword, setShowPassword] = useBoolean(false);
  const { register } = useFormContext();

  return (
    <Box mt="24px">
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Email</Text>
          <Text color="trRed.50">*</Text>
        </FormLabel>
        <Input type="email" variant="outline" w="80%" placeholder="test@test.com" />
      </FormControl>
      <FormControl justifyContent="flex-end">
        <FormLabel display="flex" fontSize={14} lineHeight="20px" color="trGray.300">
          <Text fontSize={14} lineHeight="20px" color="trGray.300">Password</Text>
        </FormLabel>
        <InputGroup size='md' w="80%">
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
      <Button variant="primary" w="100%" mt="24px" h="56px">SIGN IN</Button>
      <Flex justify="space-between" align="center" mt="16px">
        <Flex columnGap="24px">
          <Text fontWeight={500}>Have no an account?</Text>
          <Link href="#">
            <Box fontWeight={500} textDecoration="underline" color="trPrimary.50">
              Sign up now
            </Box>
          </Link>
        </Flex>
        <Link href="/employer-signup">
          <Box fontWeight={500} textDecoration="underline" color="trPrimary.50">
            Forget password?
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default memo(SignInForm);