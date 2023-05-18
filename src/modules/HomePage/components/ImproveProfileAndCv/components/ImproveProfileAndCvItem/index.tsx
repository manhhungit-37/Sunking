import { ReactElement } from 'react';
import { Flex, Box, Button, useBoolean, IconProps } from '@chakra-ui/react';

interface IProps {
  icon: (props: IconProps) => JSX.Element;
  iconHover: (props: IconProps) => JSX.Element;
  name: string;
  description: string;
}

function ImproveProfileAndCvItem({ icon: Icon, iconHover: IconHover, name, description }: IProps) {
  const [isHover, setIsHover] = useBoolean();

  return (
    <Flex
      p="24px"
      columnGap="24px"
      bg={isHover ? 'trPrimary.50' : 'trPrimary.200'}
      borderRadius="8px"
      cursor="pointer"
      onMouseEnter={setIsHover.on}
      onMouseLeave={setIsHover.off}
    >
      {!isHover ? <Icon fontSize="64px" /> : <IconHover fontSize="64px" />}
      <Box>
        <Box
          color={isHover ? 'trGray.100' : 'trGray.500'}
          textDecoration={isHover ? 'underline' : 'none'}
          fontSize="trH4"
          lineHeight="32px"
          fontWeight={700}
        >
          {name}
        </Box>
        <Box
          fontSize="trNormal"
          lineHeight="24px"
          fontWeight={500}
          color={isHover ? 'trGray.700' : 'trGray.300'}
          m="8px 0 16px"
        >
          {description}
        </Box>
        <Flex columnGap="12px">
          <Button variant="stone">Explore</Button>
          <Button variant="stone">Explore</Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ImproveProfileAndCvItem;