import * as React from 'react';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function FullWidthTabs() {
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
        <Box className="bg-[#1a1a1a]">
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
                    <Tab label="Common" {...a11yProps(0)} className='text-white' />
                    {/* <Tab label="P2P" {...a11yProps(1)} className='text-white' /> */}

                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction} className='text-white'>
                    N/A
                </TabPanel>
                {/* <TabPanel value={value} index={1} dir={theme.direction} className='text-white'>
                    <table className='w-full '>

                        <th className='w-[80%]'></th>
                        <th className='w-[20%]'></th>


                        <tbody>
                            <tr className='w-full'>

                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-row justify-start items-center'>
                                        <div className='w-[48px] h-[48px]'>

                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='text-white text-[16px]'>PEER TO PEER TRANSFER</span>
                                            <span className='text-[#cccccc] text-[14px]'>to Nipun78</span>
                                        </div>

                                    </div>
                                </td>
                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-col'>
                                        <span className='text-[#ffa524] text-[16px]'>USDT 21.90</span>
                                        <span className='text-white text-[16px]'>2023-06-01 19:09:22</span>
                                    </div>
                                </td>

                            </tr>

                            <tr className='w-full'>

                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-row justify-start items-center'>
                                        <div className='w-[48px] h-[48px]'>

                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='text-white text-[16px]'>PEER TO PEER TRANSFER</span>
                                            <span className='text-[#cccccc] text-[14px]'>to Nipun78</span>
                                        </div>

                                    </div>
                                </td>
                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-col'>
                                        <span className='text-[#ffa524] text-[16px]'>USDT 21.90</span>
                                        <span className='text-white text-[16px]'>2023-06-01 19:09:22</span>
                                    </div>
                                </td>

                            </tr>

                            <tr className='w-full'>

                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-row justify-start items-center'>
                                        <div className='w-[48px] h-[48px]'>

                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='text-white text-[16px]'>PEER TO PEER TRANSFER</span>
                                            <span className='text-[#cccccc] text-[14px]'>to Nipun78</span>
                                        </div>

                                    </div>
                                </td>
                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-col'>
                                        <span className='text-[#ffa524] text-[16px]'>USDT 21.90</span>
                                        <span className='text-white text-[16px]'>2023-06-01 19:09:22</span>
                                    </div>
                                </td>

                            </tr>

                            <tr className='w-full'>

                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-row justify-start items-center'>
                                        <div className='w-[48px] h-[48px]'>

                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='text-white text-[16px]'>PEER TO PEER TRANSFER</span>
                                            <span className='text-[#cccccc] text-[14px]'>to Nipun78</span>
                                        </div>

                                    </div>
                                </td>
                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-col'>
                                        <span className='text-[#ffa524] text-[16px]'>USDT 21.90</span>
                                        <span className='text-white text-[16px]'>2023-06-01 19:09:22</span>
                                    </div>
                                </td>

                            </tr>

                            <tr className='w-full'>

                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-row justify-start items-center'>
                                        <div className='w-[48px] h-[48px]'>

                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='text-white text-[16px]'>PEER TO PEER TRANSFER</span>
                                            <span className='text-[#cccccc] text-[14px]'>to Nipun78</span>
                                        </div>

                                    </div>
                                </td>
                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-col'>
                                        <span className='text-[#ffa524] text-[16px]'>USDT 21.90</span>
                                        <span className='text-white text-[16px]'>2023-06-01 19:09:22</span>
                                    </div>
                                </td>

                            </tr>

                            <tr className='w-full'>

                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-row justify-start items-center'>
                                        <div className='w-[48px] h-[48px]'>

                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='text-white text-[16px]'>PEER TO PEER TRANSFER</span>
                                            <span className='text-[#cccccc] text-[14px]'>to Nipun78</span>
                                        </div>

                                    </div>
                                </td>
                                <td className=' text-[12px] text-white p-2 border-[#565656] border-b-[1px] border-opacity-40 bg-[#1a1a1a]'>
                                    <div className='flex flex-col'>
                                        <span className='text-[#ffa524] text-[16px]'>USDT 21.90</span>
                                        <span className='text-white text-[16px]'>2023-06-01 19:09:22</span>
                                    </div>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </TabPanel> */}
            </SwipeableViews>
        </Box>
    );
}