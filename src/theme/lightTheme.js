import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    secondary: {
      main: purple[400],
    },

  },
  typography:{
      fontFamily:"Roboto"
  },
  components:{
    MuiPaper:{
      styleOverrides:{
        root:{
          paddingLeft:'0px !important'
        }
      }
    },
    MuiDrawer:{
      styleOverrides:{
        paper:{
        //   background:'#0288d1',
          color:'#FFF'
        }
      }
    },
    MuiIconButton:{
        styleOverrides:{
            root:{
                color:'#000',
                padding:0
            }
        }
    },
  MuiAvatar:{
      styleOverrides:{
         root:{
            cursor:'pointer'
         }
      }
  }
    
  },
 

});

export default lightTheme;