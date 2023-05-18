import { Box, Text, Flex, Input, Button } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import Image from 'next/image';
import Select from '@/components/Select';
import SearchIcon from '@/assets/icons/SearchIcon';
import { jobSelect, locationSelect, positionSelect, levelSelect, experienceSelect, industrySelect, salarySelect, dateSelect } from '@/constant/selectData';
import BannerImage from '@/assets/png/home-banner.png';
import ApplePNG from '@/assets/png/apple.png';
import VietInBankPNG from '@/assets/png/vietinbank.png';
import VietComBankPNG from '@/assets/png/vietcombank.png';

function HomeBanner() {
  const {control } = useForm({
    defaultValues: {
      job: jobSelect[0].text,
      location: locationSelect[0].text,
      position: positionSelect[0].text,
      level: levelSelect[0].text,
      experience: experienceSelect[0].text,
      industry: industrySelect[0].text,
      salary: salarySelect[0].text,
      date: dateSelect[0].text,
    }
  });
  return (
    <Box
      backgroundImage="url('/png/home-banner-image.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box maxW="1440px" mx="auto" p="100px" pb="130px">
        <Flex justify="space-between" align="center" columnGap="45px">
          <Box
            flex={1}
            bg="rgba(246, 249, 254, 0.6)"
            backdropFilter="blur(20px)"
            borderRadius="12px"
            p="32px"
          >
            <Text
              fontSize="36px"
              lineHeight="44px"
              fontWeight={700}
              color="trGray.500"
              mb="32px"
            >
            Find A Job That Suits You
            </Text>
            <Flex
              justify="space-between"
              bg="trWhite"
              boxShadow="0px 0px 24px rgba(0, 0, 0, 0.06)"
              borderRadius="12px"
            >
              <Flex align="center" gap="12px" p="8px 8px 8px 20px">
                <Box>
                  <SearchIcon fontSize="24px" />
                </Box>
                <Box w="100%">
                  <Input
                    placeholder="Search job title, key work or company ..."
                    _placeholder={{ opacity: 1, color: 'trGray.300' }}
                    border="none"
                    css={{
                      ':focus-visible': {
                        boxShadow: 'none'
                      }
                    }}
                  />
                </Box>
              </Flex>
              <Button
                px="32px"
                py="12px"
                m="8px"
              >
              Find a job
              </Button>
            </Flex>
            <Flex justify="space-between" align="center" my="16px">
              <Text fontSize="16px" lineHeight="24px" fontWeight={700} color="trGray.500">Search avadced</Text>
              <Text fontSize="14px" lineHeight="20px" fontWeight={500} color="trPrimary.50">Simplify</Text>
            </Flex>
            <Flex justify="space-between" align="center" mb="12px" columnGap="12px">
              <Controller
                render={
                  ({ field }) => <Select
                    placeholder='...'
                    getKey={(item) => item.text}
                    getLabel={(item) => <Flex align="center" gap="4px">{item.icon} {item.text}</Flex>}
                    data={jobSelect}
                    {...field}
                  />
                }
                control={control}
                name="job"
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
            </Flex>
            <Flex justify="space-between" align="center" mb="12px" columnGap="12px">
              <Controller
                render={
                  ({ field }) => <Select
                    placeholder='...'
                    getKey={(item) => item.text}
                    getLabel={(item) => <Flex align="center" gap="4px">{item.icon} {item.text}</Flex>}
                    data={positionSelect}
                    {...field}
                  />
                }
                control={control}
                name="position"
              />
              <Controller
                render={
                  ({ field }) => <Select
                    placeholder='...'
                    getKey={(item) => item.text}
                    getLabel={(item) => <Flex align="center" gap="4px">{item.icon} {item.text}</Flex>}
                    data={levelSelect}
                    {...field}
                  />
                }
                control={control}
                name="level"
              />
            </Flex>
            <Flex justify="space-between" align="center" mb="12px" columnGap="12px">
              <Controller
                render={
                  ({ field }) => <Select
                    placeholder='...'
                    getKey={(item) => item.text}
                    getLabel={(item) => <Flex align="center" gap="4px">{item.icon} {item.text}</Flex>}
                    data={experienceSelect}
                    {...field}
                  />
                }
                control={control}
                name="experience"
              />
              <Controller
                render={
                  ({ field }) => <Select
                    placeholder='...'
                    getKey={(item) => item.text}
                    getLabel={(item) => <Flex align="center" gap="4px">{item.icon} {item.text}</Flex>}
                    data={industrySelect}
                    {...field}
                  />
                }
                control={control}
                name="industry"
              />
            </Flex>
            <Flex justify="space-between" align="center" mb="12px" columnGap="12px">
              <Controller
                render={
                  ({ field }) => <Select
                    placeholder='...'
                    getKey={(item) => item.text}
                    getLabel={(item) => <Flex align="center" gap="4px">{item.icon} {item.text}</Flex>}
                    data={salarySelect}
                    {...field}
                  />
                }
                control={control}
                name="salary"
              />
              <Controller
                render={
                  ({ field }) => <Select
                    placeholder='...'
                    getKey={(item) => item.text}
                    getLabel={(item) => <Flex align="center" gap="4px">{item.icon} {item.text}</Flex>}
                    data={dateSelect}
                    {...field}
                  />
                }
                control={control}
                name="date"
              />
            </Flex>
            <Flex align="center" columnGap="16px" mt="16px">
              <Text fontSize="14px" lineHeight="20px" fontWeight={500} color="trPrimary.50">Maketer</Text>
              <Text fontSize="14px" lineHeight="20px" fontWeight={500} color="trPrimary.50">Sale</Text>
              <Text fontSize="14px" lineHeight="20px" fontWeight={500} color="trPrimary.50">Driver</Text>
              <Text fontSize="14px" lineHeight="20px" fontWeight={500} color="trPrimary.50">Designer</Text>
              <Text fontSize="14px" lineHeight="20px" fontWeight={500} color="trPrimary.50">Developer</Text>
            </Flex>
          </Box>
          <Box marginTop="-40px">
            <Image src={BannerImage} alt="banner image" width={495} height={450} />
          </Box>
        </Flex>
        <Text fontSize="16px" lineHeight="24px" fontWeight={700} mt="40px" mb="16px">Trusted by</Text>
        <Flex align="center" columnGap="24px">
          <Image src={ApplePNG} alt="apple" width={81} height={28} />
          <Image src={VietInBankPNG} alt="Vietinbank" width={103} height={28} />
          <Image src={VietComBankPNG} alt="Vietcombank" width={81} height={28} />
        </Flex>
      </Box>
    </Box>  
  );
};

export default HomeBanner;