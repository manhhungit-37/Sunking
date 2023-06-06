const baseStyle = {
  table: {
    borderCollapse: 'collapse',
    width: 'full',
  },
  th: {
    backgroundColor: 'trPrimary.50',
    color: 'trGray.100',
    borderWidth: '1px',
    borderColor: 'trGray.200'
  },
  tbody: {
    td: {
      borderWidth: '1px',
      borderColor: 'trGray.200'
    }
  }
};

const variantOdd = {
  th: {
    color: 'trGray.100',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    padding: '16px 12px',
    textTransform: 'capitalize',
  },
  tbody: {
    tr: {
      '&:nth-of-type(odd)': {
        'th, td': {
          background: 'trGray.400',
          borderColor: 'trGray.200',
        },
      },
      td: {
        background: 'trGray.100',
      },
    },
  },
};

const variantEven = {
  th: {
    color: 'trGray.100',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    padding: '16px 12px',
    textTransform: 'capitalize',
  },
  tbody: {
    tr: {
      '&:nth-of-type(odd)': {
        'th, td': {
          background: 'trGray.100',
          borderColor: 'trGray.200',
        },
      },
      td: {
        background: 'trGray.400',
      },
    },
  },
};

const variants = {
  odd: variantOdd,
  even: variantEven,
};

const Table = {
  baseStyle,
  variants,
  defaultProps: {
    variant: 'odd'
  }
};

export default Table;