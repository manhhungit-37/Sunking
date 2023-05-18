import { memo } from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HomeIcon } from '@/assets/icons/HomeIcon';

function Breadcrumbs() {
  const router = useRouter();
  const path = router.asPath.split('?')[0].split('/').filter(v => v.length > 0);

  return (
    <Box px="2.5rem" py="16px" maxW="1440px" mx="auto">
      <Breadcrumb spacing="16px" separator={<ChevronRightIcon color="trGray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">
            <HomeIcon fontSize="24px" />
          </BreadcrumbLink>
        </BreadcrumbItem>

        {path.map((page, i) => {
          const isCurrent = i === path.length - 1;

          return (
            <BreadcrumbItem
              key={i}
              color={isCurrent ? 'trGray.250' : 'trGray.500'}
            >
              <Link
                href={`/${path.slice(0, i + 1).join('/')}`}
                aria-current={isCurrent ? 'page' : 'false'}
              >
                {page}
              </Link>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Box>
  );
}

export default memo(Breadcrumbs);
