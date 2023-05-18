import { Box, Button, Checkbox, Text, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, useBoolean } from '@chakra-ui/react';
import ShowPasswordIcon from '@/assets/icons/ShowPasswordIcon';
import HidePasswordIcon from '@/assets/icons/HidePasswordIcon';
import { useForm } from 'react-hook-form';
import useContain from '@/hooks/useContain';
import CheckboxSignUp from '@/assets/icons/CheckboxSignUp';
import CheckboxSignUpEmpty from '@/assets/icons/CheckboxSignUpEmpty';

interface IProps {
  onClose: () => void;
}

function AccountManagerChangePassword({ onClose }: IProps) {
  const [showPassword, setShowPassword] = useBoolean(false);
  const [showNewPassword, setNewShowPassword] = useBoolean(false);
  const [showConfirmNewPassword, setConfirmNewShowPassword] = useBoolean(false);
  const { register, watch } = useForm({
    defaultValues: {
      newPassword: ''
    }
  });
  const newPassword = watch('newPassword');
  const { isContainNumber, isContainUppercase, isContainUnique } = useContain(newPassword);

  return (
    <Box
      position="fixed"
      top="0px"
      left="0px"
      right="0px"
      bottom="0px"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      zIndex={100}
    >
      <Box
        bg="trWhite"
        borderRadius="12px"
        p="24px"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="471px"
      >
        <Text
          fontSize="24px"
          lineHeight="32px"
          fontWeight={700}
          color="trGray.500"
          textAlign="center"
          mb="24px"
        >
          Change password
        </Text>
        <FormControl flexDirection="column" alignItems="flex-start">
          <FormLabel display="flex" justifyContent="flex-end" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
            <Text fontSize={14} lineHeight="20px" color="trGray.300">Old Password</Text>
            <Text color="trRed.50">*</Text>
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
        <FormControl flexDirection="column" alignItems="flex-start">
          <FormLabel display="flex" justifyContent="flex-end" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
            <Text fontSize={14} lineHeight="20px" color="trGray.300">New Password</Text>
            <Text color="trRed.50">*</Text>
          </FormLabel>
          <InputGroup size='md' maxW="500px">
            <Input
              type={showNewPassword ? 'text' : 'password'}
              variant="outline"
              placeholder="*****************"
              {...register('newPassword')}
            />
            <InputRightElement>
              <Button p="0px" bg="transparent" onClick={setNewShowPassword.toggle}>
                {showNewPassword ? <ShowPasswordIcon fontSize="24px" /> : <HidePasswordIcon fontSize="24px" />}
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
        <FormControl flexDirection="column" alignItems="flex-start">
          <FormLabel display="flex" justifyContent="flex-end" fontSize={14} lineHeight="20px" color="trGray.300" mr="24px">
            <Text fontSize={14} lineHeight="20px" color="trGray.300">Cofirm Password</Text>
            <Text color="trRed.50">*</Text>
          </FormLabel>
          <InputGroup size='md' maxW="500px">
            <Input
              type={showConfirmNewPassword ? 'text' : 'password'}
              variant="outline"
              placeholder="*****************"
            />
            <InputRightElement>
              <Button p="0px" bg="transparent" onClick={setConfirmNewShowPassword.toggle}>
                {showConfirmNewPassword ? <ShowPasswordIcon fontSize="24px" /> : <HidePasswordIcon fontSize="24px" />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Flex gap="12px" mt="24px">
          <Button variant="white" flex={1} onClick={onClose}>
            Cancel
          </Button>
          <Button flex={1} onClick={onClose}>
            Save change
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default AccountManagerChangePassword;