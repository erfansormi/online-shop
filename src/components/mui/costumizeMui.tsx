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
        },
        divider: "#e0e0e6",
    },
    typography: {
        button: {
            textTransform: "capitalize",
            lineHeight: 2.4,
            fontWeight: 600,
            letterSpacing: "0.03rem"
        },
        fontFamily: [
            "'__Fredoka_2dcc66'",
            "'__Fredoka_Fallback_2dcc66'",
            'inherit',
        ].join(','),
        h1: {
            fontSize: "1.8rem",
            lineHeight: 1.8,
        },
        h2: {
            fontSize: "1.6rem",
            lineHeight: 1.8
        },
        h3: {
            fontSize: "1.4rem",
            lineHeight: 1.6
        },
        h4: {
            fontSize: "1.2rem",
            lineHeight: 1.6
        },
        h5: {
            fontSize: "1rem",
            lineHeight: 1.5
        },
        h6: {
            fontSize: "0.87rem",
            lineHeight: 1.3
        },
    },
    components: {
        MuiButton: {
            variants: [
                { props: { size: "small" }, style: { lineHeight: 2.1 } }
            ]
        },
    },
    shape: {
        borderRadius: 6
    },
});