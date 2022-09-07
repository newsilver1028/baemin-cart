import { MouseEventHandler } from 'react';
import { useAtom } from 'jotai';
import produce from 'immer';
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

  const onClickIncrease: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { name } = e.currentTarget.dataset;

    setCartList((prev: CartState[]) => {
      const nextState = produce(prev, (draft) => {
        const selectedItem = draft.find((p) => p.name === name);
        selectedItem!.quantity += 1;
        if (!selectedItem!.priceByQuantity) selectedItem!.priceByQuantity = selectedItem!.price;
        selectedItem!.priceByQuantity = selectedItem!.price * selectedItem!.quantity;
      });
      return nextState;
    });
  };

  const onClickDecrease: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { name } = e.currentTarget.dataset;

    setCartList((prev: CartState[]) => {
      const nextState = produce(prev, (draft) => {
        const selectedItem = draft.find((p) => p.name === name);
        if (selectedItem!.quantity <= 0) return;
        selectedItem!.quantity -= 1;
        selectedItem!.priceByQuantity = selectedItem!.price * selectedItem!.quantity;
      });
      return nextState;
    });
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
              <Button {...COMMON_STYLE.button} onClick={onClickDecrease} data-name={c.name}>
                <MinusIcon />
              </Button>
              <Box {...CART_LIST_STYLE.quantity} border={`2px solid ${borderColor}`}>
                {c.quantity}
              </Box>
              <Button {...COMMON_STYLE.button} onClick={onClickIncrease} data-name={c.name}>
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
