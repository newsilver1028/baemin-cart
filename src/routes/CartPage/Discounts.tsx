import { Box, Checkbox, Heading, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';

import { Discount } from '../../types/index.d';

import { COMMON_STYLE } from '../COMMON_STYLE';
import { CART_LIST_STYLE } from './CART_LIST_STYLE';
import { DISCOUNTS_STYLE } from './DISCOUNTS_STYLE';

interface Props {
  discounts: Discount[];
}

const Discounts = ({ discounts }: Props) => {
  const itemColor = useColorModeValue('white', 'gray.900');

  return (
    <Box {...COMMON_STYLE.itemWrapper} p='20px' bg={itemColor}>
      <Heading {...DISCOUNTS_STYLE.title}>할인</Heading>
      <List>
        {discounts.map((d) => (
          <ListItem key={d.id} my='20px'>
            <Checkbox>
              <Text {...CART_LIST_STYLE.itemText}>{d.name}</Text>
            </Checkbox>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Discounts;
