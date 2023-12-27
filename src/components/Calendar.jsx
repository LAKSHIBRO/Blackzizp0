import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme } from '@mui/material/styles';




export default function DateCalendarValue() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DateCalendar className="custom-calendar text-white" />
        </LocalizationProvider>
      );
}



