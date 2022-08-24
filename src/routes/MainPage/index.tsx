import { MouseEventHandler } from 'react';
import { useSetAtom } from 'jotai';
import { Box, Button, Center, Heading, List, Spinner, useColorMode, useColorModeValue } from '@chakra-ui/react';

import { cartAtom } from '../../store';
import { useMerchantInfo } from './useMerchantInfo';
import FoodItem from './FoodItem';
import { MAIN_PAGE_STYLE } from './MAIN_PAGE_STYLE';

// temp
import CartPage from '../CartPage';
import Discounts from '../CartPage/Discounts';

const MainPage = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const onOpen = () => {
  //   setIsOpen((prev) => !prev);
  // };
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const appBg = useColorModeValue('gray.100', 'gray.600');

  const setCartList = useSetAtom(cartAtom);
  const onClickItem: MouseEventHandler<HTMLButtonElement> = (e) => {
    const selectedItem = e.currentTarget.dataset;

    setCartList((prev) => {
      if (prev.find((p) => p.name === selectedItem.name)) {
        return prev;
      }
      return [...prev, { name: String(selectedItem.name), price: Number(selectedItem.price), quantity: 1 }];
    });
  };

  const { isLoading, merchantData } = useMerchantInfo();

  if (!merchantData || isLoading) {
    return (
      <Center>
        <Box {...MAIN_PAGE_STYLE.container}>
          <Spinner thickness='4px' speed='0.65s' color='white' size='xl' />
        </Box>
      </Center>
    );
  }

  return (
    <Center bg={bg}>
      <Box {...MAIN_PAGE_STYLE.container} bg={appBg}>
        <CartPage />
        <Heading>{merchantData.merchantName}</Heading>
        <Button type='button' onClick={toggleColorMode}>
          colorMode
        </Button>
        <List>
          {Object.keys(merchantData.items).map((k) => (
            <FoodItem key={k} name={k} items={merchantData.items[k]} onClickItem={onClickItem} />
          ))}
        </List>
        <Heading>Discounts</Heading>
        {/* <Discounts items={merchantData.discounts} /> */}
      </Box>
    </Center>
  );
};

export default MainPage;
