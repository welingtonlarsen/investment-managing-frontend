import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import ClippedDrawer from './Drawer';

const LayoutPage = () => {
  return (
    // <>
    //   <Box sx={{ mb: 3 }}>
    //     <Header />
    //   </Box>
    //   <Box
    //     sx={{
    //       margin: {
    //         xs: 0,
    //         sm: 1,
    //         md: 2,
    //       },
    //     }}
    //   >
    //     <Outlet />
    //   </Box>
    // </>
    <ClippedDrawer>
      <Outlet />
    </ClippedDrawer>
  );
};

export default LayoutPage;
