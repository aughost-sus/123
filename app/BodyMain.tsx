import React, { useState, useEffect, SetStateAction } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import WarningAmber from '@mui/icons-material/WarningAmber';

interface RowData {
  name: string;
  path: string | null;
  name1: string | null;
  status1: number | null;
}

function createData(name: string, path: string | null, name1: string | null, status1: number | null): RowData {
  return { name,path, name1, status1 };
}

const columns = [
  { label: 'Business Systems/Applications', labelstatus: 'Overall Status' },
  { label: 'Business Systems/Applications', labelstatus: 'Overall Status' },
];

const SuccessiConLabels = <Chip color="success" label="Up and Running" icon={<CheckIcon />} />;
const ErroriConLabels = <Chip color="error" label="Down" icon={<WarningAmber />} />;
//Icons And Labels

const BodyTable: React.FC = () => {
  // const [status, setStatus] = useState<any>(null); 
 
  const magic = async (path:any) => { 

    let config: AxiosRequestConfig = {                                                                
      method: 'get',
      url: `/api/${path}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };

    try {
      const response: AxiosResponse = await axios(config); // Use try-catch instead of .then().catch()
      if (response.status === 200) {
        return (SuccessiConLabels);
      }
    } catch (error:any) {
      return (ErroriConLabels);
    }
  }
 
  const rows = [
    createData('Core Bank', 'psslai', 'In-House Critical Apps', null ),
    createData('AFK', 'afpslai', 'In-House Critical Apps', null ),
  ];

  // useEffect(() => {
  //   magic('psslai');
  //   console.log();
  // }, []);

  const [dateTime, setDateTime] = useState<SetStateAction<Date> | undefined>();
  const [tablerow, setTableRow] = useState<Array<[]> | undefined>();
  const clock = () => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }

  let rowsz: any = []
  
  useEffect(() => {
    clock();
  }, []);

  const status = async () => {

    let b: any = []
    rows.map( async (x: any) => {
      const c = await magic(x.path)
      const d = { 
        name: x.name,
        path: x.path,
        name1: x.name1,
        status1: c
      }
      b.push(d)
    })
     rowsz = b
     setTableRow(b);
     console.log(rowsz)
    return b;
  }

  useEffect(() => {
    status();
  }, []);


  return (
    <TableContainer component={Paper} style={{ marginTop: '0px', maxWidth: '100%', border: '2px solid #dee2e6', backgroundColor: '#F1F1F1' }}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Business Systems/Applications Availability and Performance Monitoring - PROD Environment
      </Typography>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Date and Time: {dateTime?.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: "numeric",
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
                timeZone: 'Asia/Manila',
            })}
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
          {tablerow?.map((row: any, rowIndex: any) => (
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
              <TableCell align="center" style={{ border: '2px solid #dee2e6' }}>{row.status1}</TableCell>
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