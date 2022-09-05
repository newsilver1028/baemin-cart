import { Button, Flex, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { COMMON_STYLE } from '../../COMMON_STYLE';
import { HEADER_STYLE } from './HEADER_STYLE';

interface Props {
  merchantName: string;
}

const Header = ({ merchantName }: Props) => {
  const { toggleColorMode } = useColorMode();
  const itemColor = useColorModeValue('white', 'gray.900');

  return (
    <Flex {...HEADER_STYLE.header} bg={itemColor}>
      <Heading {...HEADER_STYLE.heading}>{merchantName}</Heading>
      <Button type='button' onClick={toggleColorMode} {...COMMON_STYLE.button}>
        Mode
      </Button>
      <Link to='/cart'>
        <Button type='button' {...COMMON_STYLE.button}>
          Cart
        </Button>
      </Link>
    </Flex>
  );
};

export default Header;
