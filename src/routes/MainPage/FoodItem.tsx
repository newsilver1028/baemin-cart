import { MouseEventHandler } from 'react';
import { Button, Flex, Heading, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';

import { formattedKRWPrice } from '../utils';
import { Item } from '../../types/index.d';

import { COMMON_STYLE } from '../COMMON_STYLE';
import { FOOD_ITEM_STYLE } from './FOOD_ITEM_STYLE';

interface Props {
  name: string;
  items: Item[];
  onClickItem: MouseEventHandler<HTMLButtonElement>;
}

const FoodItem = ({ name, items, onClickItem }: Props) => {
  const itemColor = useColorModeValue('white', 'gray.900');

  return (
    <ListItem {...COMMON_STYLE.itemWrapper} p='20px' bgColor={itemColor}>
      <Heading {...FOOD_ITEM_STYLE.category}>{name}</Heading>
      <List>
        {items.map((t) => {
          return (
            <ListItem key={t.id} {...FOOD_ITEM_STYLE.item}>
              <Button
                type='button'
                onClick={onClickItem}
                data-name={t.name}
                data-price={t.price}
                {...COMMON_STYLE.button}
              >
                <Flex flexDir='column' justify='start'>
                  <Text {...FOOD_ITEM_STYLE.text}>{t.name}</Text>
                  <Text {...FOOD_ITEM_STYLE.text} color='gray.500'>
                    {formattedKRWPrice(t.price)}
                  </Text>
                </Flex>
              </Button>
            </ListItem>
          );
        })}
      </List>
    </ListItem>
  );
};

export default FoodItem;
