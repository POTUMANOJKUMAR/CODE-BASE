// pages/Accounts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicTable from '../../Components/Common/NormalTable';
import TableControls from '../../Components/Common/NormalTable/TableControl';
import { Box, MenuItem, Select } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

const Accounts = () => {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0); // starts from 0
  const [limit, setLimit] = useState(10);
  const [totalEntries, setTotalEntries] = useState(0);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const datas = [
  { name: 'Actual', value: 80 },
  { name: 'Remaining', value: 20 },
];

const COLORS = ['#00C49F', '#F0F0F0'];
const token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIE1heSAyNiAyMDI1IDA3OjQ0OjM0IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJpZCI6IjY1ZjI5NWM2MTYxYTM5MDUyNjI3YjAwMSIsInVzZXJUeXBlIjoiYWRtaW4iLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJkZXBhcnRtZW50SWQiOiI2M2FjNzhlZjUwZTczNzcxYjM4NmMxYTQiLCJuYW1lIjoiTWFub2oiLCJtb2JpbGVOdW1iZXIiOiI4NTQ0NTMyMzg5Iiwic2Vzc2lvblRpbWUiOjE3NDgyNDU0NzQ3MDgsInJvbGVJZCI6IjYzY2Y5NzgyYzQwNTZkMGJjNDhlODY0ZCIsImlhdCI6MTc0ODI0NTQ3NCwiZXhwIjoxNzQ4MjY3MDc0fQ.WCSULGS_d1wnmuGVkWpGWZlrMnSp7vW5Cq2fMxx1B1Q"
const fetchData = async (pageNum = 0, limitNum = 10) => {

    console.log(order,orderBy,"hhhhhh")
    try {
      const response = await axios.get(
        `https://preproduser.thangamayil.in/user/api/v1/user?page=${pageNum + 1}&limit=${limitNum}&isOtpVerified=1&isMpinCreated=1`,
        {
          headers: {
            accept: 'application/json',
            authorization: token,
          },
        }
      );

      const responseData = response.data?.data?.list || [];
      const totalPages = response.data?.data?.pageMeta?.totalPages || 0;
      console.log(responseData, "lll");
      setData(responseData);
      setTotalCount(totalPages);
      setTotalEntries(response.data?.data?.pageMeta?.totalData || 0);
    } catch (err) {
      console.error('API Error:', err);
    }
  };

  useEffect(() => {
    fetchData(page, limit);
  }, [page, limit,order,orderBy]);

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'mobileNumber', label: 'Mobile Number' },
    { id: 'isOtpVerified', label: 'OTP Verified' },
    { id: 'isMpinCreated', label: 'MPIN Created' },
    { id: 'createdAt', label: 'Created At' },
  ];

  return (
    <><div></div>
   
 <div style={{ position: 'relative', width: 200, height: 200 }}>
    <PieChart width={200} height={200}>
      <Pie
        data={datas}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>

   
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 30,
        color: '#1814F3',
      }}
    >
      ⚡
    </div>
  </div>
  
    <div>
      <TableControls
        rowsPerPage={limit}
        page={page}
        setPage={setPage}
        setRowsPerPage={setLimit}

      >
        {/* 👇 You can place filters or buttons here as children */}
        <Box display="flex" gap={1}>
          <Select size="small" defaultValue="All">
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
          {/* Add more filters here if needed */}
        </Box>
      </TableControls>
      <DynamicTable
        columns={columns}
        data={data}
        page={page}
        setPage={setPage}
        rowsPerPage={limit}
        setRowsPerPage={setLimit}
        totalCount={totalCount}
        totalEntries={totalEntries}
        setOrder={setOrder}
        setOrderBy={setOrderBy}
        order={order}
        orderBy={orderBy}
      />
    </div> </>
  );
};

export default Accounts;
