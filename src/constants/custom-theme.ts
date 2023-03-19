import { Theme, createTheme } from '@mui/material';
import { teal } from '@mui/material/colors';

const customTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: teal
    }
});

export default customTheme;