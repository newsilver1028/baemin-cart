import { Link } from 'react-router-dom';
import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { COMMON_STYLE } from '../../COMMON_STYLE';
import { HEADER_STYLE } from './HEADER_STYLE';

const Header = () => {
  const itemColor = useColorModeValue('white', 'gray.900');

  return (
    <Flex {...HEADER_STYLE.header} bg={itemColor}>
      <Link to='/'>
        <Button {...COMMON_STYLE.button}>
          <FaChevronRight />
        </Button>
      </Link>
    </Flex>
  );
};

export default Header;
