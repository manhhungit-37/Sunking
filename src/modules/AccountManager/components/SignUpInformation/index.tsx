import { Box, Divider, Text, Flex, useDisclosure } from '@chakra-ui/react';
import EditIcon from '@/assets/icons/EditIcon';
import AccountManagerChangePassword from '../ChangePassword';

function AccountManagerSignUpInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="trWhite"
      borderRadius="8px"
      p="24px"
      mb="40px"
    >
      <Text fontSize="32px" lineHeight="40px" fontWeight={700} color="trGray.500">
        Sign Up Infomation
      </Text>
      <Divider borderColor="trGray.200" my="24px" />
      <Flex align="center">
        <Text
          fontSize="14px"
          lineHeight="20px"
          fontWeight={500}
          color="trGray.300"
          minW="108px"
        >
          Email
        </Text>
        <Text fontSize="16px" lineHeight="24px" fontWeight={700} color="trGray.500">thietke.huutri@gmail.com</Text>
      </Flex>
      <Flex justify="space-between" align="center" mt="16px">
        <Flex align="center">
          <Text
            fontSize="14px"
            lineHeight="20px"
            fontWeight={500}
            color="trGray.300"
            minW="108px"
          >
            Password
          </Text>
          <Text fontSize="16px" lineHeight="24px" fontWeight={700} color="trGray.500">***********</Text>
        </Flex>
        <EditIcon fontSize={24} cursor="pointer" onClick={onOpen} />
      </Flex>
      {isOpen && <AccountManagerChangePassword onClose={onClose} />}
    </Box>
  );
}

export default AccountManagerSignUpInfo;