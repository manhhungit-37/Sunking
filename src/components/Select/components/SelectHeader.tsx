import { Box, Flex } from '@chakra-ui/react';
import { ArrowDownIcon, CloseIcon } from '@chakra-ui/icons';
import { memo, SyntheticEvent, useCallback } from 'react';
import CaretdownIcon from '@/assets/icons/CaretdownIcon';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  selected: JSX.Element | null;
  placeholder?: string;
  removeable: boolean;
  handleRemoveItem?: () => void;
  isDisabled: boolean;
}

function getColor(isOpen: boolean, selected: JSX.Element | null) {
  if (isOpen) return 'trGray.50';
  if (selected === null) {
    return 'trGray.500';
  }
  return 'trBlack.50';
}

function SelectHeader({
  isOpen,
  onToggle,
  selected,
  placeholder,
  removeable,
  handleRemoveItem,
  isDisabled,
}: Props) {
  const handleRemoveSource = useCallback((event: SyntheticEvent<HTMLDivElement>) => {
    event.persist();
    event.stopPropagation();
    if (handleRemoveItem) {
      handleRemoveItem();
    }
  }, [handleRemoveItem]);

  const handleToggleDropdown = useCallback(() => {
    if (!isDisabled) onToggle();
  }, [onToggle, isDisabled]);

  return (
    <Flex
      px="15"
      py="10px"
      justify="space-between"
      align="center"
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      onClick={handleToggleDropdown}
      gap="10px"
      bg={isDisabled ? 'trGray.300' : 'transparent'}
    >
      <Box
        color={getColor(isOpen, selected)}
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
        className="select-header"
        fontSize="16px"
        lineHeight="24px"
        sx={{
          '& svg': {
            width: '24px',
            height: '24px'
          }
        }}
      >
        {selected === null ? placeholder : selected}
      </Box>
      <Box transform={isOpen ? 'rotate(-180deg)' : 'none'} transition=".3s ease-in-out">
        <CaretdownIcon fontSize="10px" />
      </Box>
      {removeable && !isDisabled && (
        <Box position="absolute" right="35px" zIndex="9999" onClick={handleRemoveSource}>
          <CloseIcon fontSize="12px" />
        </Box>
      )}
    </Flex>
  );
}

SelectHeader.defaultProps = {
  placeholder: '',
  handleRemoveItem: () => {},
};

export default memo(SelectHeader);
