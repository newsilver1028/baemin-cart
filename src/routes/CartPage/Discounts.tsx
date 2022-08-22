import { List, ListItem } from '@chakra-ui/react';
import { Discount } from '../../types/index.d';

interface Props {
  items: Discount[];
}

const Discounts = ({ items }: Props) => {
  return (
    <List>
      {items.map((d) => (
        <ListItem key={d.id}>{d.name}</ListItem>
      ))}
    </List>
  );
};

export default Discounts;
