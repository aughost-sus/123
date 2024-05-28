
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface RowData {
    name: string;
    status: number | null;
    name1: string | null;
    status1: number | null;
  }
  
  function createData(name: string, status: number | null, name1: string | null, status1: number | null): RowData {
    return { name, status, name1, status1 };
  }
  
//table data and labels

const rows = [
  createData('Core Bank', null, 'In-House Critical Apps', null),
  createData('PFS Coral', 200, 'PSSLAI Tools - Risk Profiling', 200),
  createData('PFS Bluelace', 262, 'PSSLAI Tools - Watchlist', 24),
  createData('PFS Luminous', 200, 'ID Print', 67),
  createData('Outsourced Apps', null, 'Omnichannel', 49),
  createData('eBT (ERP)', 200, 'BilisOnline(Admin)', 24),
  createData('AMLA', 237, 'GL Tools', 37),
  createData('Altitude', 262, 'OMIU(Reports)', 24),
  createData('EPFS Apps', null, 'ITRACK (SMS LogS Viewer)', 67),
  createData('ITRACK - 0919 160 2154', 356, 'In-House Admin Apps', null),
  createData('ITRACK - 0919 160 8000', 200, 'PSSLAI Tools - User Access Management', 24),
  createData('BilisOnline (Web Portal)', 237, 'PSSLAI Tools - API Maintenance', 37),
  createData('BilisMobile (iOS)', 262, 'M365 Apps', null),
  createData('BilisMobile (Android)', 305, 'RMT', 67),
  createData('ML Online Query/Disbursing', 356, 'SaaS', null),
  createData('LBC Online Query/Disbursing', 356, 'myHR', 49),
  createData('External Apps', null, 'IBM Instana', 24),
  createData('PNP SDLIS', 237, 'Soprano (A2P messaging)', 37),
  createData('PNP PDLIS', 262, 'Infobip (A2P messaging)', 24),
  createData('BFP SDLIS', 305, 'In-House Non-Critical Apps', null),
  createData('BFP PDLIS', 305, 'PSSLAI Tools - CSR', 67),
  createData('Web Portals', null, 'PSSLAI Tools - Incident Report(HR)', 67),
  createData('PSSLAI Website',200, 'PSSLAI Tools - Courier', 67),
  createData('OMIU (Member)', 305, null, null),
];
const columns = [
  { label: 'Business Systems/Applications', labelstatus: 'Overall Status' },
  { label: 'Business Systems/Applications', labelstatus: 'Overall Status' }, 
];

const BodyTable: React.FC = () => {
  
  const magic = async () => {
    let config: AxiosRequestConfig = {
        method: 'get',
        url: '/api',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    await axios(config).then((response: AxiosResponse) => {
        console.log(response.data)
    }).catch((error: AxiosError | any) => {
        console.log(error)
    })
}

useEffect(() => {
   magic()
}, [])
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const monthName = months[dateTime.getMonth()];

  return (
    <TableContainer component={Paper} style={{ marginTop: '0px', maxWidth: '100%', border: '2px solid #dee2e6', backgroundColor: '#F1F1F1' }}>
      <Typography variant="h5" style={{textAlign: "center"}}>
        Business Systems/Applications Availability and Performance Monitoring - PROD Environment
      </Typography>
      <Typography variant="h6" style={{textAlign: "center"}}>
        Date and Time: {`${dateTime.getDate()} ${monthName} ${dateTime.getFullYear()} ${dateTime.toLocaleTimeString('en-US', { timeZone: 'Asia/Manila' })}`}
      </Typography>

      <Table sx={{ minWidth: 650, borderCollapse: 'collapse' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <React.Fragment key={index}>
                <TableCell style={{ fontWeight: 'bold', textAlign: 'center', background: 'lightblue' }}>{column.label}</TableCell>
                <TableCell style={{ fontWeight: 'bold', textAlign: 'center', background: 'lightblue' }}>{column.labelstatus}</TableCell>
              </React.Fragment>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell
                component="th"
                scope="row"
                style={{
                  border: '2px solid #dee2e6',
                  fontWeight:
                    (row.name === 'Core Bank' || row.name === 'Outsourced Apps' || row.name === 'EPFS Apps' || row.name === 'External Apps' || row.name === 'Web Portals')
                      ? 'bold' : 'normal',
                  textAlign:
                    (row.name === 'Core Bank' || row.name === 'Outsourced Apps' || row.name === 'EPFS Apps' || row.name === 'External Apps' || row.name === 'Web Portals')
                      ? 'center' : 'left'
                }}
              >
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ border: '2px solid #dee2e6' }}>{row.status}</TableCell>
              <TableCell align="left"
                style={{
                  border: '2px solid #dee2e6',
                  fontWeight:
                    (row.name1 === 'In-House Critical Apps' || row.name1 === 'In-House Admin Apps' || row.name1 === 'M465 Apps' || row.name1 === 'SaaS' || row.name1 === 'In-House Non-Critical Apps') ? 'bold' : 'normal',
                  textAlign:
                    (row.name1 === 'In-House Critical Apps' || row.name1 === 'In-House Admin Apps' || row.name1 === 'M465 Apps' || row.name1 === 'SaaS' || row.name1 === 'In-House Non-Critical Apps') ? 'center' : 'left'
                }}
              >
                {row.name1}
              </TableCell>
              <TableCell align="right" style={{ border: '2px solid #dee2e6' }}>{row.status1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BodyTable;