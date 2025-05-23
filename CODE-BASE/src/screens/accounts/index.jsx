// pages/Accounts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicTable from '../../Components/Common/NormalTable';
import TableControls from '../../Components/Common/NormalTable/TableControl';
import { Box, MenuItem, Select } from '@mui/material';

const Accounts = () => {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0); // starts from 0
  const [limit, setLimit] = useState(10);
  const [totalEntries, setTotalEntries] = useState(0);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiRnJpIE1heSAyMyAyMDI1IDEyOjMxOjAzIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJpZCI6IjY1ZjI5NWM2MTYxYTM5MDUyNjI3YjAwMSIsInVzZXJUeXBlIjoiYWRtaW4iLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJkZXBhcnRtZW50SWQiOiI2M2FjNzhlZjUwZTczNzcxYjM4NmMxYTQiLCJuYW1lIjoiTWFub2oiLCJtb2JpbGVOdW1iZXIiOiI4NTQ0NTMyMzg5Iiwic2Vzc2lvblRpbWUiOjE3NDgwMDM0NjM0NTAsInJvbGVJZCI6IjYzY2Y5NzgyYzQwNTZkMGJjNDhlODY0ZCIsImlhdCI6MTc0ODAwMzQ2MywiZXhwIjoxNzQ4MDI1MDYzfQ.P9Iou9yPFvfuw0uHISAxkx8iNjYSPxlRjIPLktoxCyw";
  const fetchData = async (pageNum = 0, limitNum = 10, orderBy = '', order = 'asc') => {

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
  }, [page, limit,order]);

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'mobileNumber', label: 'Mobile Number' },
    { id: 'isOtpVerified', label: 'OTP Verified' },
    { id: 'isMpinCreated', label: 'MPIN Created' },
    { id: 'createdAt', label: 'Created At' },
  ];

  return (
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
    </div>
  );
};

export default Accounts;
