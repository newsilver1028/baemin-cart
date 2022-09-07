import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { Badge, Button, Flex, Heading, Icon, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';

import { cartAtom } from '../../../store';

import { COMMON_STYLE } from '../../COMMON_STYLE';
import { HEADER_STYLE } from './HEADER_STYLE';

interface Props {
  merchantName: string;
}

const Header = ({ merchantName }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const itemColor = useColorModeValue('white', 'gray.900');

  const [cartList] = useAtom(cartAtom);

  return (
    <Flex {...HEADER_STYLE.header} bg={itemColor}>
      <Heading {...HEADER_STYLE.heading}>{merchantName}</Heading>
      <Flex position='relative'>
        <Button type='button' onClick={toggleColorMode} {...COMMON_STYLE.button}>
          {colorMode === 'light' ? <MoonIcon w='20px' h='20px' /> : <SunIcon w='20px' h='20px' />}
        </Button>
        <Link to='/cart'>
          <Button type='button' {...COMMON_STYLE.button}>
            <Icon as={FaShoppingCart} w='20px' h='20px' />
            <Badge {...HEADER_STYLE.badge}>{cartList.length}</Badge>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
