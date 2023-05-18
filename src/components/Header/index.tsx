import Link from 'next/link';
import { Box, Button, Flex } from '@chakra-ui/react';
import Logo from '@/assets/icons/Logo';
import ChevronIcon from '@/assets/icons/ChevronIcon';
import UserIcon from '@/assets/icons/UserIcon';
import SignInIcon from '@/assets/icons/SignInIcon';

function Header() {
  return (
    <Box boxShadow="0px 4px 24px rgba(0, 0, 0, 0.06)">
      <Box maxW="1440px" m="auto">
        <Flex p="16px 40px" justify="space-between" align="center">
          <Flex gap="40px">
            <Link href="/">
              <Logo fontSize="140px" height="auto" />
            </Link>
            <Flex gap="24px" fontWeight={700} color="trBlack.50">
              <Link href="#">Hiring</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
            </Flex>
          </Flex>
          <Flex gap="24px">
            <Flex gap="8px">
              <Button columnGap="8px">
                <UserIcon fontSize="24px" />
                Sign up
              </Button>
              <Button variant="white" columnGap="8px">
                <SignInIcon fontSize="24px" />
                Sign in
              </Button>
              <Button variant="black">For Employers</Button>
            </Flex>
            <Flex gap="8px" align="center" fontWeight={700} color="trPrimary.50">
              Eng
              <ChevronIcon />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;