const Textarea = {
  baseStyle: {
    padding: '16px 20px',
    borderRadius: '8px',
    borderWidth: '2px',
    borderColor: 'trGray.400',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500
  },
  variants: {
    primary: {
      height: '200px'
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};

export default Textarea;