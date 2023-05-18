import { forwardRef, useState, ChangeEvent, Ref } from 'react';
import { Box, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import CameraIcon from '@/assets/icons/CameraIcon';
import Image from 'next/image';

interface IProps {
  width?: string;
  height?: string;
  bg?: string;
}

function UploadAvatar(props: IProps, ref: Ref<HTMLDivElement>) {
  const { width = '80px', height = '80px', bg='trGray.900' } = props;
  const [files, setFiles] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);

  async function onChooseFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    if (e.target.files.length <= 0) return;
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
    setFiles(file);
  }

  return (
    <Box ref={ref}>
      <Flex
        w={width}
        h={height}
        bg={bg}
        borderRadius="50%"
        justify="center"
        align="center"
        position="relative"
        cursor="pointer"
      >
        <FormControl justifyContent="center" mt="0px" h="100%">
          <FormLabel htmlFor='upload-file' position="absolute" w="100%" h="100%" m="0px" cursor="pointer" />
          <Input
            type='file'
            id="upload-file"
            onChange={onChooseFile}
            display="none"
          />
          {/* {!image && <CameraIcon fontSize="32px" />} */}
          <CameraIcon fontSize="32px" />
          {/* {image && <Image src={image} alt={image} fill />} */}
        </FormControl>
      </Flex>
    </Box>
  );
};

export default forwardRef(UploadAvatar);