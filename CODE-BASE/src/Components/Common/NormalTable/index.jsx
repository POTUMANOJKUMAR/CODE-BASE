import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  IconButton,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Stack,
  Box,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomPagination from '../CustomePagination';
import { styled } from '@mui/material/styles';


const StyledTable = styled(Table)({
  borderCollapse: 'separate',
  borderSpacing: 0,
  border: '1px solid #EBECEF',
  borderRadius: '12px',
  overflow: 'hidden',

  '& thead th': {
    backgroundColor: '#F9FAFB',
    color: '#1F2937',
    fontSize: 12,
    height: 44,
    fontWeight: 700,
    borderBottom: '1px solid #EBECEF',
    borderLeft: 'none',
    borderRight: 'none',
  },

  '& tbody td': {
    borderTop: 'none',
    borderBottom: '1px solid #E5E7EB',
    borderLeft: 'none',
    height: 63,
    borderRight: 'none',
    fontSize: 14,
    padding: '8px 16px',
  },

  '& tbody tr:last-child td': {
    borderBottom: 'none',
  },

  // Rounded corners
  '& thead tr:first-of-type th:first-of-type': {
    borderTopLeftRadius: '12px',
  },
  '& thead tr:first-of-type th:last-of-type': {
    borderTopRightRadius: '12px',
  },
  '& tbody tr:last-of-type td:first-of-type': {
    borderBottomLeftRadius: '12px',
  },
  '& tbody tr:last-of-type td:last-of-type': {
    borderBottomRightRadius: '12px',
  },
});
const StyledTableCell = styled(TableCell)({
  padding: '8px 10px',
  fontSize: 12,
  fontWeight: 700,
  border: 'none',

});


const DynamicTable = ({
  columns,
  data,
  page,
  setPage,
  rowsPerPage,
  totalCount,
  totalEntries,
  setOrder,
  setOrderBy,
  order,
  orderBy,
}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRowIndex, setMenuRowIndex] = useState(null);

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuRowIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRowIndex(null);
  };



  const sortedData = [...data].sort((a, b) => {
    if (!orderBy) return 0;
    return (order === 'asc' ? 1 : -1) * (a[orderBy] > b[orderBy] ? 1 : -1);
  });

  return (
    <>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>S.NO</StyledTableCell>
            {columns.map(({ id, label }) => (
              <StyledTableCell key={id}>
                <TableSortLabel
                  active={orderBy === id}
                  direction={orderBy === id ? order : 'asc'}
                  onClick={() => handleSort(id)}
                  sx={{
                    color: '#000 !important',
                    '&:hover': {
                      color: '#000 !important',
                    },
                    '&.Mui-active': {
                      color: '#000 !important',
                    },
                    '& .MuiTableSortLabel-icon': {
                      color: '#000 !important',
                    },
                  }}
                >
                  {label}
                </TableSortLabel>

              </StyledTableCell>
            ))}
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell>
                {page * rowsPerPage + index + 1} {/* This calculates the correct serial number across pages */}
              </StyledTableCell>

              {columns.map(({ id }) => (
                <StyledTableCell key={id}>{String(row[id])}</StyledTableCell>
              ))}

              <StyledTableCell>
                <IconButton onClick={(e) => handleMenuOpen(e, index)}>
                  <MoreVertIcon />
                </IconButton>
                {menuRowIndex === index && (
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>View</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Mark as Inactive</MenuItem>
                  </Menu>
                )}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>

      </StyledTable>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Typography variant="body2" sx={{ ml: 2 }}>
          Showing {page * rowsPerPage + 1} - {Math.min((page + 1) * rowsPerPage, totalEntries)} of {totalEntries}
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <CustomPagination
            count={totalCount}
            page={page}
            onChange={(e, newPage) => setPage(newPage)}
          />
        </Box>
      </Box>


    </>
  );
};

export default DynamicTable;
