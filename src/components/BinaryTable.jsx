import * as React from 'react';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DefaultBinaryTree from './DefaultBinaryTree';
import DefaultUnaryTree from './DefaultUnaryTree';
import IntroducerTree from './IntroducerTree';



interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function BinaryTable() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        // <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
        <Box className="bg-[#1a1a1a] w-full">
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="white"
                    textColor="white"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    className='bg-[#151515]'
                >
                    <Tab label="IR Allowance" {...a11yProps(0)} className='text-white ' />
              
                    <Tab label="Direct Introducer" {...a11yProps(1)} className='text-white ' />


                </Tabs>
            </AppBar>
            <div
                // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                // index={value}
                // onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction} className='text-white'>
                    <DefaultBinaryTree/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction} className='text-white'>
                    <IntroducerTree/>
                </TabPanel>
               
            </div>
        </Box>
    );
}