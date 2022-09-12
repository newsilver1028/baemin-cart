import { Flex, Center, Spinner, useColorModeValue } from '@chakra-ui/react';

import { MAIN_PAGE_STYLE } from '../../MainPage/MAIN_PAGE_STYLE';

const LoadingSpinner = () => {
  const bg = useColorModeValue('gray.200', 'gray.700');
  const appBg = useColorModeValue('gray.100', 'gray.800');

  return (
    <Center bg={bg} {...MAIN_PAGE_STYLE.wrapper}>
      <Flex {...MAIN_PAGE_STYLE.container} justifyItems='center' bg={appBg}>
        <Spinner thickness='4px' speed='0.65s' color='white' size='xl' />
      </Flex>
    </Center>
  );
};

export default LoadingSpinner;
