import { MouseEventHandler } from 'react';
import { SetStateAction, useAtom } from 'jotai';
import { produce } from 'immer';
import { Box, Button, Flex, List, ListItem, Text } from '@chakra-ui/react';

import { cartAtom, readOnlyAtom } from '../../store';
import { formattedKRWPrice } from '../utils';
import { CartState } from '../../types/index.d';

const CartPage = () => {
  const [cartList, setCartList] = useAtom(cartAtom);

  const onClickIncrease: MouseEventHandler<HTMLButtonElement> = (e) => {
    const selectedItem = e.currentTarget.dataset;
    // setCartList((prev) => (prev.find((p) => p.name === selectedItem.name)?.quantity += 1));
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCartList((prev: CartState[]) => prev.filter((p) => p.name !== e.currentTarget.dataset.name));
  };

  return (
    <div>
      <List>
        {cartList.map((c) => (
          <ListItem key={c.name}>
            <Text>{c.name}</Text>
            <Text>{formattedKRWPrice(c.price)}</Text>
            <Button type='button' onClick={onClickDelete} data-name={c.name}>
              X
            </Button>
            <Flex>
              <Button>-</Button>
              <Box>{c.quantity}</Box>
              <Button>+</Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CartPage;
