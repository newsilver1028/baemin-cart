import { Box } from '@chakra-ui/react';
import { Discount } from '../../types/index.d';
import CartList from './CartList';
import Discounts from './Discounts';
import Header from './Header';

const CartPage = () => {
  return (
    <Box>
      <Header />
      <CartList />
      <Discounts />
    </Box>
  );
};

export default CartPage;
