import Box from '@mui/material/Box';

interface TabPanelProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabContentContainer = ({ children, value, index, ...other }: TabPanelProps) => {
    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className="pb-10"
            {...other}
        >
            <Box sx={{ px: 3 }}>
                {children}
            </Box>
        </div>
    );
}

export default TabContentContainer;