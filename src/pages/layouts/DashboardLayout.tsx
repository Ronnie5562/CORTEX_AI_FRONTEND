
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import {
    Experimental_CssVarsProvider as MaterialCssVarsProvider
} from '@mui/material/styles';

import Box from '@mui/joy/Box';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import { extendTheme as extendJoyTheme, THEME_ID } from '@mui/joy/styles';
const joyTheme = extendJoyTheme();

interface DashboardLayoutProps {
  children: React.ReactNode;
}


const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <MaterialCssVarsProvider>
            <CssVarsProvider theme={{ [THEME_ID]: joyTheme }} disableTransitionOnChange>
                <CssBaseline />
                <Box sx={{ display: 'flex', minHeight: '100dvh', width: '100%', fontFamily: 'Halyard Display' }}>
                    <Header />
                    <Sidebar />
                    <Box
                        component="main"
                        className="MainContent"
                        sx={{
                            px: { xs: 2, md: 6 },
                            pt: {
                            xs: 'calc(12px + var(--Header-height))',
                            sm: 'calc(12px + var(--Header-height))',
                            md: 3,
                            },
                            pb: { xs: 2, sm: 2, md: 3 },
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            minWidth: 0,
                            height: '100%',
                            gap: 1,
                        }}
                    >
                        <>
                            {children}
                        </>
                    </Box>
                </Box>
            </CssVarsProvider>
        </MaterialCssVarsProvider>
    );
};

export default DashboardLayout;
