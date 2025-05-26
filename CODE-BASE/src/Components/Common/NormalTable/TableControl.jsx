import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';

const TableControls = ({ rowsPerPage, setRowsPerPage, children,setPage }) => {
    const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when rows per page changes
  };
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Box display="flex" alignItems="center" gap={1}>
        <FormControl size="small" variant="outlined" sx={{ minWidth: 80 }}>
          <Select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            displayEmpty
            inputProps={{ 'aria-label': 'rows per page' }}
            sx={{
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray', // static border color on focus
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray', // static border color on hover
    },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray', // default border color
    },
    color: 'black', // text color
  }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={35}>35</MenuItem>
          </Select>
        </FormControl>
        <Typography>entries per page</Typography>
      </Box>

      {/* Place filters or other right-side controls here */}
      {children}
    </Box>
  );
};

export default TableControls;
