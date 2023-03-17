import { useState } from 'react';
import { Inputs } from './constants';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Inputter } from './components';
import customTheme from './constants/custom-theme';
import './App.scss';

function App() {

    const [inputs, setInputs] = useState<Inputs | null>(null);

    return (
        <ThemeProvider theme={customTheme}>
            { !inputs
                ? <Inputter onSubmit={val => setInputs(val)} />
                : <div></div>
            }
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
