import { Heading, List, ListItem, Text } from '@chakra-ui/react';
import { Item } from '../../types/index.d';

interface Props {
  name: string;
  items: Item[];
}

const FoodItem = ({ name, items }: Props) => {
  return (
    <ListItem>
      <Heading>{name}</Heading>
      <List>
        {items.map((t) => {
          const formattedPrice = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(t.price);

          return (
            <ListItem key={t.id}>
              {t.name}
              <Text>{formattedPrice}</Text>
            </ListItem>
          );
        })}
      </List>
    </ListItem>
  );
};

export default FoodItem;
