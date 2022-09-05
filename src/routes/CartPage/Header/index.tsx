import { Button, Flex, useColorModeValue } from '@chakra-ui/react';

import { COMMON_STYLE } from '../../COMMON_STYLE';
import { HEADER_STYLE } from './HEADER_STYLE';

const Header = () => {
  const itemColor = useColorModeValue('white', 'gray.900');

  return (
    <Flex {...HEADER_STYLE.header} bg={itemColor}>
      <Button {...COMMON_STYLE.button}>{'>'}</Button>
    </Flex>
  );
};

export default Header;
