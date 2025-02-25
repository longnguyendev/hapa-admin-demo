import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { Flex } from '../Flex';

export function FilterBar() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box
      sx={{
        py: 2,
        px: 2.5,
      }}
    >
      <Flex
        sx={{
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 1, lg: 0 },
        }}
      >
        <Flex
          sx={{
            borderColor: 'divider',
            borderWidth: '1px',
            borderRight: { sx: '1px', lg: 'unset' },
            borderStyle: 'solid',
            width: { xs: '100%', lg: 420 },
            height: 36,
            px: '10px',
          }}
          alignItems="center"
        >
          <Flex alignItems="center" sx={{ flexGrow: 1 }}>
            <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <InputBase
              placeholder="Tìm theo tên Sản phẩm gốc, Mã SKU sản phẩm"
              fullWidth
            />
          </Flex>
        </Flex>
        <Box sx={{ width: 180 }}>
          <FormControl
            fullWidth
            size="small"
            sx={{
              '.MuiInputBase-root': { height: 36 },
              '& fieldset': {
                borderRadius: '0',
                borderColor: 'divider',
                borderWidth: '1px',
                borderRight: { sx: '1px', lg: 'unset' },
                borderStyle: 'solid',
              },
              label: {
                color: 'text.primary',
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">Thương hiệu</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Flex
          sx={{
            px: 1,
            width: 130,
            height: 36,
            justifyContent: 'space-between',
            borderColor: 'divider',
            borderWidth: '1px',
            borderStyle: 'solid',
            alignItems: 'center',
          }}
        >
          <Typography>Bộ lọc khác</Typography>
          <FilterAltIcon sx={{ color: 'text.secondary' }} />
        </Flex>
      </Flex>
    </Box>
  );
}
