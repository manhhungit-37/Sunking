import { Box, Card, CardBody, Tag, TagLabel } from '@chakra-ui/react';
import Image from 'next/image';
import { IBlog } from '@/types/Blogs.type';

function BlogItem({ image, name, desc }: IBlog) {
  return (
    <Card
      role="group"
      position="relative"
      borderWidth="1.5px"
      borderColor="trGray.400"
      borderRadius="12px"
      cursor="pointer"
      overflow="hidden"
      h="100%"
      _hover={{
        filter: 'drop-shadow(0px 42px 80px rgba(0, 0, 0, 0.04)) drop-shadow(0px 17.5466px 33.4221px rgba(0, 0, 0, 0.0287542)) drop-shadow(0px 9.38125px 17.869px rgba(0, 0, 0, 0.0238443)) drop-shadow(0px 5.25905px 10.0172px rgba(0, 0, 0, 0.02)) drop-shadow(0px 2.79304px 5.32008px rgba(0, 0, 0, 0.0161557)) drop-shadow(0px 1.16225px 2.21381px rgba(0, 0, 0, 0.0112458))'
      }}
    >
      <CardBody
        p="0px"
      >
        <Box width={392} height={317} position="relative">
          <Image src={image} alt={name} fill sizes="392px" />
          <Tag
            position="absolute"
            bottom="35px"
            left="16px"
            size={'lg'}
            borderRadius="full"
            variant="solid"
            bg="trRed.100"
            color="trGray.100"
            px="20px"
            py="6px"
            zIndex={1}
          >
            <TagLabel lineHeight="24px">Explore</TagLabel>
          </Tag>
        </Box>
        <Box pos="relative" bg="trWhite" borderRadius="12px" mt="-20px" p="24px" zIndex={1}>
          <Box
            fontSize="trH4"
            fontWeight={700}
            lineHeight="32px"
            color="trGray.500"
            objectFit="cover"
            _groupHover={{ color: 'trPrimary.50', textDecoration: 'underline' }}
          >
            {name}
          </Box>
          <Box color="trGray.600">
            {desc}
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}

export default BlogItem;