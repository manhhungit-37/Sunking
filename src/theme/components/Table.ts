import { tableAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const numericStyles = defineStyle({
  '&[data-is-numeric=true]': {
    textAlign: 'end',
  },
});

const baseStyle = definePartsStyle({
  table: {
    borderCollapse: 'collapse',
    width: 'full',
  },
  th: {
    backgroundColor: 'trPrimary.50',
    color: 'trGray.100',
    borderColor: 'trGray.200'
  },
  tbody: {
    tr: {
      backgroundColor: 'trGray.100'
    }
  }
});

// const variantStripe = definePartsStyle((props) => {
//   const { colorScheme: c } = props;

//   return {
//     th: {
//       color: mode('gray.600', 'gray.400')(props),
//       borderBottom: '1px',
//       borderColor: mode(`${c}.100`, `${c}.700`)(props),
//       ...numericStyles,
//     },
//     td: {
//       borderBottom: '1px',
//       borderColor: mode(`${c}.100`, `${c}.700`)(props),
//       ...numericStyles,
//     },
//     caption: {
//       color: mode('gray.600', 'gray.100')(props),
//     },
//     tbody: {
//       tr: {
//         '&:nth-of-type(odd)': {
//           'th, td': {
//             borderBottomWidth: '1px',
//             borderColor: mode(`${c}.100`, `${c}.700`)(props),
//           },
//           td: {
//             background: mode(`${c}.100`, `${c}.700`)(props),
//           },
//         },
//       },
//     },
//     tfoot: {
//       tr: {
//         '&:last-of-type': {
//           th: { borderBottomWidth: 0 },
//         },
//       },
//     },
//   };
// });


const variants = {
  striped: {
    th: {
      color: 'trGray.100',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 500,
      padding: '16px 12px'
    }
  },
};

const Table = {
  baseStyle,
  variants,
  defaultProps: {
    variant: 'striped'
  }
};

export default Table;