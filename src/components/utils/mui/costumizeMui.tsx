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
            main: "#06b6d4",
            light: "#67e8f9",
            dark: "#0e7490",
            contrastText: "#fff"
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        divider: "#e0e0e6",
    },
    typography: {
        button: {
            textTransform: "capitalize",
            lineHeight: 2.4,
            fontWeight: 600,
            letterSpacing: "0.03rem",
            fontFamily: "inherit"
        },
        fontFamily: [
            "inherit"
        ].join(','),
        h1: {
            fontSize: "1.8rem",
            lineHeight: 1.8,
            fontWeight: "bold",
        },
        h2: {
            fontSize: "1.6rem",
            lineHeight: 1.8,
            fontWeight: "bold"
        },
        h3: {
            fontSize: "1.4rem",
            lineHeight: 1.6,
            fontWeight: "bold"
        },
        h4: {
            fontSize: "1.2rem",
            lineHeight: 1.6,
            fontWeight: "bold"
        },
        h5: {
            fontSize: "1rem",
            lineHeight: 1.5,
            fontWeight: "bold"
        },
        h6: {
            fontSize: "0.87rem",
            lineHeight: 1.3,
            fontWeight: "bold"
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

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}