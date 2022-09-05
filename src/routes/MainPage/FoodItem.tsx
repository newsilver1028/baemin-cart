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
  const hoverColor = useColorModeValue('#EDF2F7', '#1A202C');

  return (
    <ListItem {...COMMON_STYLE.itemWrapper} bgColor={itemColor}>
      <Heading {...FOOD_ITEM_STYLE.category} p='20px'>
        {name}
      </Heading>
      <List>
        {items.map((t) => {
          return (
            <ListItem key={t.id} {...FOOD_ITEM_STYLE.item} _hover={{ bg: hoverColor }} p='20px'>
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
