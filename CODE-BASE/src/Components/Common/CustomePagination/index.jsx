import { Pagination, PaginationItem, Stack } from "@mui/material";

export default function CustomPagination({count,page,onChange}) {
  return (
    <Stack spacing={2}>
     <Pagination
  count={count}
  page={page + 1}
  onChange={(e, value) => onChange(e, value - 1)}
  shape="rounded"
  variant="outlined"
  siblingCount={1} // Show one page before and after current
  boundaryCount={1} // Show first and last page
  renderItem={(item) => (
    <PaginationItem
      {...item}
      sx={{
        borderRadius: 0,
        margin: '0',
        border: '1px solid #d1d1d1',
        minWidth: '40px',
        height: '40px',
        ...(item.type === 'previous' && {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        }),
        ...(item.type === 'next' && {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        }),
      }}
    />
  )}
/>

    </Stack>
  );
}
