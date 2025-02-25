import { Box } from '@mui/material';

import { FilterBar } from './FilterBar';
import EnhancedTable from './SelectTable';
import { TabList } from './TabList';

export function ProductTable() {
  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      <TabList />
      <FilterBar />
      <EnhancedTable />
    </Box>
  );
}
