import { Box } from '@chakra-ui/react';
import { Discount } from '../../types/index.d';
import CartList from './CartList';
import Discounts from './Discounts';

interface Props {
  discounts: Discount[];
}

const CartPage = ({ discounts }: Props) => {
  return (
    <Box>
      <CartList />
      <Discounts discounts={discounts} />
    </Box>
  );
};

export default CartPage;
