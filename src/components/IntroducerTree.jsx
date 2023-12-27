import React, { useState, useEffect } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function IntroducerTree() {
  const [irFamily, setIrFamily] = useState([]);

  useEffect(() => {
    getRefUsers();
  }, []);

  const getRefUsers = async () => {
    try {
      const resp = await axios.get('http://localhost:5001/token');
      const decoded = jwt_decode(resp.data.accessToken);
      const user_code = decoded.user_code;
      const resIrFamily = await axios.get(`http://localhost:5001/getIrFamily/get/${user_code}`);
      console.log('resIrFamily', resIrFamily)
      setIrFamily(resIrFamily.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="card-tree overflow-x-auto w-full">
      <table className='w-full'>
        <thead>
          <tr>
            <th className='text-[#FFA524] p-3 justify-center items-center uppercase'>Left</th>
            <th className='text-[#FFA524] p-3 justify-center items-center uppercase'>Right</th>
          </tr>
        </thead>
        {irFamily&&<tbody>
          <tr  className="w-full" >
            <td className=' p-3 justify-center items-center'>
              {/* Render left items */}
              {irFamily.filter(item => item.position === 'left').map(item => (
                <div key={item.id}>{item.username}</div>
              ))}
            </td>
            <td className=' p-3 justify-center items-center'>
              {/* Render right items */}
              {irFamily.filter(item => item.position === 'right').map(item => (
                <div key={item.id}>{item.username}</div>
              ))}
            </td>
          </tr>
        </tbody>}
      </table>
    </div>
  );
}
