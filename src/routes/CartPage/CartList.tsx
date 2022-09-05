import { MouseEventHandler } from 'react';
import { useAtom } from 'jotai';
import { Box, Button, Flex, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import { CloseIcon, MinusIcon } from '@chakra-ui/icons';
import { FaPlus } from 'react-icons/fa';

import { formattedKRWPrice } from '../utils';
import { cartAtom } from '../../store';
import { CartState } from '../../types/index.d';

import { COMMON_STYLE } from '../COMMON_STYLE';
import { CART_LIST_STYLE } from './CART_LIST_STYLE';

const CartList = () => {
  const itemColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('#EDF2F7', '#1A202C');

  const [cartList, setCartList] = useAtom(cartAtom);

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCartList((prev: CartState[]) => prev.filter((p) => p.name !== e.currentTarget.dataset.name));
  };
  return (
    <List {...COMMON_STYLE.itemWrapper} bg={itemColor}>
      {cartList.map((c) => (
        <ListItem key={c.name} {...CART_LIST_STYLE.item} borderBottom={`2px solid ${borderColor}`}>
          <Flex justify='space-between' alignItems='center'>
            <Text {...CART_LIST_STYLE.itemText}>{c.name}</Text>
            <Button type='button' onClick={onClickDelete} data-name={c.name} {...COMMON_STYLE.button}>
              <CloseIcon />
            </Button>
          </Flex>
          <Flex justify='space-between' alignItems='center'>
            <Text {...CART_LIST_STYLE.itemText} color='gray.500'>
              {formattedKRWPrice(c.price)}
            </Text>
            <Flex {...CART_LIST_STYLE.controlWrapper} border={`2px solid ${borderColor}`}>
              <Button {...COMMON_STYLE.button}>
                <MinusIcon />
              </Button>
              <Box {...CART_LIST_STYLE.quantity} border={`2px solid ${borderColor}`}>
                {c.quantity}
              </Box>
              <Button {...COMMON_STYLE.button}>
                <FaPlus />
              </Button>
            </Flex>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};

export default CartList;
