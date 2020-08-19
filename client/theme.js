  
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FCA8B2',
    },
    secondary: {
      main: '#f5eee9',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
    color: {
      default: '#ffffff',
    },
    footer:{
      default: '#353535',
    },
    button:{
      default: '#29BA80',
    }
  },
});

export default theme;