"use client"; 
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BodyTable from './BodyMain';


export default function OrgTabs() {
  const [value, setValue] = useState<string>('1');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', marginTop: '10px'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="PROD Environment" value="1" />
            <Tab label="PSSLAI EPFS Transaction Monitoring ITRACK" value="2" />
            <Tab label="PSSLAI EPFS Transaction Monitoring Loan Release and Fund Transfer" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <BodyTable />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
