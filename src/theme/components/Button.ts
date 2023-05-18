const Button = {
  baseStyle: {
    fontWeight: 'bold',
    lineHeight: '24px',
    borderRadius: '6px',
  },
  sizes: {
    sm: {
      fontSize: 'trRegular',
    },
    md: {
      fontSize: 'trNormal',
      padding: '10px 24px',
      height: 'auto'
    }
  },
  variants: {
    primary: {
      bg: 'trPrimary.50',
      color: 'trGray.100'
    },
    white: {
      bg: 'transparent',
      color: 'trPrimary.50',
      border: '2px solid',
      borderColor: 'trPrimary.50',
      py: '9px'
    },
    black: {
      bg: 'trBlack.100',
      color: 'trGray.100'
    },
    stone: {
      fontSize: 'trThin',
      fontWeight: '500',
      lineHeight: '20px',
      bg: 'trGray.400',
      color: 'trGray.300',
      borderRadius: '4px',
      border: '2px solid',
      borderColor: 'trGray.800',
      boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.04)',
      padding: '8px 12px',
    },
    red: {
      color: 'trRed.200',
      border: '2px solid',
      borderColor: 'trRed.200',
      padding: '14px 40px'
    },
    grey: {
      bg: 'trGray.500',
      color: 'trGray.100'
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  }
};

export default Button;