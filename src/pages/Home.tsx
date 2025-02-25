import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Typography } from '@mui/material';

import { Flex, ProductTable } from '@/components';

export function HomePage() {
  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" mb={2}>
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 600,
            lineHeight: '28.2px',
          }}
        >
          Sản Phẩm
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Tạo mới
        </Button>
      </Flex>
      <ProductTable />
    </Box>
  );
}
