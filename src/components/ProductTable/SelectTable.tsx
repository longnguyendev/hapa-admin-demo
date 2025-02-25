import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Collapse } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import * as React from 'react';

interface Data {
  id: number;
  image: string;
  parentName: string;
  brandName: string;
  SKU: string;
  usedCount: number;
  note: string;
}

function createData(
  id: number,
  image: string,
  parentName: string,
  brandName: string,
  SKU: string,
  usedCount: number,
  note: string
) {
  return {
    id,
    image,
    parentName,
    brandName,
    SKU,
    usedCount,
    note,
    items: [
      {
        id: 10,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
        name: 'Lõi lọc RYO Sediment Filter',
        brandName: 'RYO Hyundai',
        SKU: 'RYO Sediment',
        circle: '6 tháng',
        price: 280000,
      },
      {
        id: 11,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
        name: 'Lõi lọc RYO Sediment Filter',
        brandName: 'RYO Hyundai',
        SKU: 'RYO Sediment',
        circle: '6 tháng',
        price: 280000,
      },
      {
        id: 12,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
        name: 'Lõi lọc RYO Sediment Filter',
        brandName: 'RYO Hyundai',
        SKU: 'RYO Sediment',
        circle: '6 tháng',
        price: 280000,
      },
    ],
  };
}

const rows = [
  createData(
    1,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
    'Máy Lọc Nước Đầu Nguồn 3M AP904',
    '3M',
    '123',
    120,
    ''
  ),
  createData(
    2,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
    'Máy Lọc Nước Đầu Nguồn 3M AP904',
    '3M',
    '123',
    120,
    ''
  ),
  createData(
    3,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
    'Máy Lọc Nước Đầu Nguồn 3M AP904',
    '3M',
    '123',
    120,
    ''
  ),
  createData(
    4,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
    'Máy Lọc Nước Đầu Nguồn 3M AP904',
    '3M',
    '123',
    120,
    ''
  ),
  createData(
    5,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
    'Máy Lọc Nước Đầu Nguồn 3M AP904',
    '3M',
    '123',
    120,
    ''
  ),
  createData(
    6,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
    'Máy Lọc Nước Đầu Nguồn 3M AP904',
    '3M',
    '123',
    120,
    ''
  ),
  createData(
    7,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83hHSm2ZOSZat5EzxVGhAw54hMhIeZqjfLg&s',
    'Máy Lọc Nước Đầu Nguồn 3M AP904',
    '3M',
    '123',
    120,
    ''
  ),
];

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'image',
    numeric: false,
    disablePadding: true,
    label: 'Ảnh',
  },
  {
    id: 'parentName',
    numeric: false,
    disablePadding: false,
    label: 'Sản phẩm gốc',
  },
  {
    id: 'brandName',
    numeric: false,
    disablePadding: false,
    label: 'Thương hiệu',
  },
  {
    id: 'SKU',
    numeric: false,
    disablePadding: false,
    label: 'Mã SKU',
  },
  {
    id: 'usedCount',
    numeric: true,
    disablePadding: false,
    label: 'Tổng lượt sử dụng',
  },
  {
    id: 'note',
    numeric: true,
    disablePadding: false,
    label: 'Ghi chú',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead sx={{ backgroundColor: '#E8EAEB' }}>
      <TableRow>
        <TableCell />
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={
              headCell.label === 'Ghi chú'
                ? 'center'
                : headCell.numeric === true
                  ? 'right'
                  : 'left'
            }
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
interface EnhancedTableToolbarProps {
  numSelected: number;
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Máy lọc nước
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
export default function EnhancedTable() {
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () => [...rows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <Row
                    row={row}
                    handleClick={handleClick}
                    isItemSelected={isItemSelected}
                    labelId={labelId}
                    key={row.id}
                  />
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

function Row(props: {
  row: ReturnType<typeof createData>;
  handleClick: (id: number) => void;
  isItemSelected: boolean;
  labelId: string;
}) {
  const { row, handleClick, isItemSelected, labelId } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        hover
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.id}
        selected={isItemSelected}
        sx={{ cursor: 'pointer', backgroundColor: open ? '#F0F9FE' : '#fff' }}
      >
        <TableCell padding="checkbox">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardDoubleArrowDownIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell padding="checkbox">
          <Checkbox
            onClick={() => handleClick(row.id)}
            color="primary"
            checked={isItemSelected}
            inputProps={{
              'aria-labelledby': labelId,
            }}
          />
        </TableCell>
        <TableCell component="th" id={labelId} scope="row" padding="none">
          <img
            src={row.image}
            style={{ height: '36px', width: '36px', objectFit: 'cover' }}
          />
        </TableCell>
        <TableCell align="left" sx={{ color: 'primary.main' }}>
          {row.parentName}
        </TableCell>
        <TableCell align="left">{row.brandName}</TableCell>
        <TableCell align="left">{row.SKU}</TableCell>
        <TableCell align="right">{row.usedCount}</TableCell>
        <TableCell align="right">{row.note}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ backgroundColor: 'red' }}>
              <Table
                size="small"
                aria-label="purchases"
                sx={{ backgroundColor: '#fff' }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: '#F0F9FE' }} />
                    <TableCell align="center">Ảnh</TableCell>
                    <TableCell align="left">Sản phẩm</TableCell>
                    <TableCell align="right">Thương hiệu</TableCell>
                    <TableCell align="left">Mã SKU</TableCell>
                    <TableCell align="right">Chu kỳ chăm sóc</TableCell>
                    <TableCell align="right">giá bán</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell sx={{ backgroundColor: '#F0F9FE' }} />
                      <TableCell component="th" scope="row" accessKey="center">
                        <img
                          src={historyRow.image}
                          style={{ width: '36px', height: '36px' }}
                        />
                      </TableCell>
                      <TableCell sx={{ color: 'primary.main' }}>
                        {historyRow.name}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.brandName}
                      </TableCell>
                      <TableCell align="left">{historyRow.SKU}</TableCell>
                      <TableCell align="right">{historyRow.circle}</TableCell>
                      <TableCell align="right">{historyRow.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow sx={{ padding: 0 }}>
          <TableCell
            sx={{ backgroundColor: '#F0F9FE', height: 26 }}
            colSpan={8}
          />
        </TableRow>
      )}
    </React.Fragment>
  );
}
