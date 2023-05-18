import {
  Box,
  chakra,
  Portal,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import {
  forwardRef,
  memo,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import VirtualList from 'react-tiny-virtual-list';
import SelectHeader from './components/SelectHeader';

const SelectBoxStyled = chakra(Box, {
  baseStyle: {
    borderWidth: '2px',
    borderColor: 'trGray.850',
    borderRadius: '10px',
    flex: 1,
    bg: 'trWhite',
    _hover: {
      borderColor: 'trGray.400',
    },
    '&.active': {
      borderColor: 'trPrimary.50',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
});

interface Props<T, TValue> {
  data: T[];
  getKey: (item: T) => TValue;
  getLabel: (item: T) => JSX.Element;
  onChange: (event: { target: { value: TValue | null } }) => void;
  placeholder: string;
  value: TValue | null;
  removeable?: boolean;
  isDisabled?: boolean;
}

function Select<T, TValue>({
  data,
  getKey,
  getLabel,
  onChange,
  placeholder,
  value,
  removeable,
  isDisabled,
}: Props<T, TValue>, selectRef: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    isOpen,
    onToggle,
    onClose,
  } = useDisclosure();

  useOutsideClick({
    ref,
    handler: onClose,
  });

  const itemSelected = useMemo<T | null>(() => {
    if (value === null) return null;
    const selectedItem = data.find((item: T) => getKey(item) === value);
    if (!selectedItem) return null;
    return selectedItem;
  }, [value, data, getKey]);

  const selectedLabel = useMemo<JSX.Element | null>(() => {
    if (itemSelected === null) return null;
    return getLabel(itemSelected);
  }, [itemSelected, getLabel]);

  const handleChooseItem = useCallback((item: TValue) => {
    onClose();
    onChange({ target: { value: item } });
  }, [onClose, onChange]);

  const handleRemoveItem = useCallback(() => {
    onClose();
    onChange({ target: { value: null } });
  }, [onClose, onChange]);

  return (
    <SelectBoxStyled
      className={isOpen ? 'active' : ''}
      ref={selectRef}
      _hover={{
        borderColor: isDisabled ? 'trGray.350' : 'trGray.400',
      }}
    >
      <Box ref={ref} pos="relative">
        <SelectHeader
          placeholder={placeholder}
          selected={selectedLabel}
          isOpen={isOpen}
          onToggle={onToggle}
          removeable={Boolean(removeable! && itemSelected)}
          handleRemoveItem={handleRemoveItem}
          isDisabled={isDisabled!}
        />
      </Box>
      <Portal containerRef={ref}>
        {isOpen && (
          <Box
            pos="absolute"
            zIndex="dropdown"
            bg="trWhite"
            w="calc(100% + 4px)"
            left="-2px"
            borderWidth="2px"
            borderColor="trPrimary.50"
            borderTopWidth={0}
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="10px"
            px="15px"
          >
            <VirtualList
              width="100%"
              height={data.length >= 7 ? 364 : data.length * 52}
              itemCount={data.length}
              itemSize={52}
              renderItem={({ index, style }) => (
                <Box
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  style={style}
                  fontSize="trNormal"
                  lineHeight="24px"
                  py="10px"
                  borderTopWidth="2px"
                  borderTopColor="trGray.450"
                  onClick={() => handleChooseItem(getKey(data[index]))}
                  color={getKey(data[index]) === value ? 'trPrimary.50' : 'trBlack.50'}
                  cursor="pointer"
                  _hover={{
                    color: 'trPrimary.50',
                  }}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  paddingRight="10px"
                  maxW="full"
                >
                  {getLabel(data[index])}
                </Box>
              )}
            />
          </Box>
        )}
      </Portal>
    </SelectBoxStyled>
  );
}

Select.defaultProps = {
  removeable: false,
  isDisabled: false,
};

const SelectFowardRef = forwardRef(Select as any);

export default memo(SelectFowardRef) as unknown as typeof Select;
