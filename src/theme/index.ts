import { extendTheme } from '@chakra-ui/react';

//components
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import FormControl from './components/FormControl';
import Checkbox from './components/Checkbox';
import Select from './components/Select';
import Textarea from './components/Textarea';

const breakpoints = {
  sm: '320px',
  msm: '525px',
  md: '768px',
  lg: '990px',
  xl: '1200px',
  kxl: '1590px',
};

const theme = extendTheme({
  breakpoints,
  components: {
    Button,
    Container,
    Input,
    Form: FormControl,
    Checkbox,
    Select,
    Textarea,
  },
  fonts: {
    body: 'Inter',
  },
  fontSizes: {
    trSmall: '10px',
    trThin: '14px',
    trRegular: '15px',
    trNormal: '16px',
    trH1: '36px',
    trH2: '32px',
    trH4: '24px',
  },
  colors: {
    trPrimary: {
      50: '#1852b4',
      100: '#13428f',
      200: '#f6f9fe',
      300: '#4675c3',
    },
    trBlue: {
      75: '#d3e2f8',
      100: '#698fce',
    },
    trGray: {
      10: '#f7f9fa1a',
      50: '#0000000a',
      90: '#f7f9fae6',
      100: '#f7f9fa',
      200: '#dfe2e3',
      225: '#c8cbcb',
      250: '#b0b3b4',
      300: '#818585',
      400: '#ebedee',
      500: '#3a3f40',
      600: '#757979',
      700: '#b4c7e5',
      800: '#c8cacb',
      900: '#D9D9D9'
    },
    trWhite: '#fff',
    trBlack: {
      50: '#0b1111',
      100: '#222828'
    },
    trRed: {
      50: '#dc2d2d',
      100: '#f25151',
      200: '#e35757'
    }
  },
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        fontSize: 'trNormal',
        fontWeight: '400',
        minHeight: '100vh',
        height: '100%',
        fontFamily: '\'Inter\', sans-serif',
        overflow: 'overlay',
      },
      '*::-webkit-scrollbar': {
        width: '5px',
      },
      '*::-webkit-scrollbar-track': {
        width: '7px',
      },
      '*::-webkit-scrollbar-thumb': {
        borderRadius: '24px',
      },
      'input[type="color"]::-webkit-color-swatch-wrapper': {
        padding: 0,
      },
      'input[type="color"]::-webkit-color-swatch': {
        border: 'none',
      },
      '#userback_button_container .userback-button-e': {
        top: '30% !important',
      },
      a: {
        fontSize: '1em',
      },
      h1: {
        fontSize: '2em',
      },
      h2: {
        fontSize: '1.5em',
      },
      h3: {
        fontSize: '1.17em',
      },
    },
  },
  zIndices: {
    sidebar: 999,
  },
});

export default theme;