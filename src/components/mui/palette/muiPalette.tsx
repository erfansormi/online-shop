import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
    palette: {
        primary: {
            main: "#f43f5e",
            light: "#fb7185",
            dark: "#be123c",
            contrastText: "#fff"
        },
        info: {
            main: "#2563eb",
            light: "#3b82f6",
            dark: "#1e40af",
            contrastText: "#fff"
        }
    },
});