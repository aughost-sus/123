
import React, { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';


// const ServerResponseStatus = async () => {


//   // const [status, setStatus] = useState(null);
//   // const [error, setError] = useState(null);



//   // const checkServerStatus = async () => {
//   //   try {
//   //     const response = await customAxiosInstance.post(''); 
//   //     setStatus(response.data.status);
//   //   } catch (err:any) { 
//   //     setError(err.message);
//   //   }
//   // };

//   // return (
//   //   <div>
//   //     <button onClick={checkServerStatus}>Check Server Status</button>
//   //     {status && <div>Server Response Status: {status}</div>}
//   //     {error && <div>Error: {error}</div>}
//   //   </div>
//   // );
// };

// export default async function handler (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const info: any = await ServerResponseStatus();
//   res.json(info)

//   res.end()
// }

const customAxiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});


export async function GET() {
     let getInfo: AxiosRequestConfig = {
        method: 'get',
        url: 'https://www.psslai.com/',
        headers: {
          'Content-Type': 'application/json'
      }
      }
    
      const Neww = customAxiosInstance(getInfo)

      return new Response((await Neww).data)
  }