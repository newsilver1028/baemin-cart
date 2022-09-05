import { Box, Center, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../../MainPage/Header';
import { MAIN_PAGE_STYLE } from '../../MainPage/MAIN_PAGE_STYLE';

const Layout = () => {
  const bg = useColorModeValue('gray.200', 'gray.800');
  const appBg = useColorModeValue('gray.100', 'gray.800');

  return (
    <Center bg={bg} {...MAIN_PAGE_STYLE.wrapper}>
      <Box {...MAIN_PAGE_STYLE.container} bg={appBg}>
        {/* <Header merchantName={merchantData.merchantName} /> */}
        <Outlet />
      </Box>
    </Center>
  );
};

export default Layout;
