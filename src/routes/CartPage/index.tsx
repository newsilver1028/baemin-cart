import { Box } from '@chakra-ui/react';
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
