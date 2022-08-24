import { MouseEventHandler } from 'react';
import { Button, Heading, List, ListItem, Text } from '@chakra-ui/react';

import { formattedKRWPrice } from '../utils';
import { Item } from '../../types/index.d';

interface Props {
  name: string;
  items: Item[];
  onClickItem: MouseEventHandler<HTMLButtonElement>;
}

const FoodItem = ({ name, items, onClickItem }: Props) => {
  return (
    <ListItem>
      <Heading>{name}</Heading>
      <List>
        {items.map((t) => {
          return (
            <ListItem key={t.id}>
              <Button type='button' onClick={onClickItem} data-name={t.name} data-price={t.price}>
                {t.name}
                <Text>{formattedKRWPrice(t.price)}</Text>
              </Button>
            </ListItem>
          );
        })}
      </List>
    </ListItem>
  );
};

export default FoodItem;
