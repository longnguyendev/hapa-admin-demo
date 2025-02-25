import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useState } from 'react';

export function TabList() {
  const [value, setValue] = useState('one');

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="Tất cả" wrapped />
          <Tab value="two" label="Sản phẩm A" wrapped />
          <Tab value="three" label="Sản phẩm B" wrapped />
        </Tabs>
      </Box>
    </Box>
  );
}
