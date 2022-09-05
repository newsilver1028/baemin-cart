import { MouseEventHandler } from 'react';
import { Box, Center, Heading, List, Spinner, useColorModeValue } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';

import { cartAtom } from '../../store';
import { useMerchantInfo } from './useMerchantInfo';
import FoodItem from './FoodItem';
import Header from './Header';

import { MAIN_PAGE_STYLE } from './MAIN_PAGE_STYLE';

// temp
import CartPage from '../CartPage';

const MainPage = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const onOpen = () => {
  //   setIsOpen((prev) => !prev);
  // };
  const bg = useColorModeValue('gray.200', 'gray.800');
  const appBg = useColorModeValue('gray.100', 'gray.800');

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
      <Center bg={bg} {...MAIN_PAGE_STYLE.wrapper}>
        <Box {...MAIN_PAGE_STYLE.container} bg={appBg}>
          <Spinner thickness='4px' speed='0.65s' color='white' size='xl' />
        </Box>
      </Center>
    );
  }

  return (
    <Center bg={bg} {...MAIN_PAGE_STYLE.wrapper}>
      <Box {...MAIN_PAGE_STYLE.container} bg={appBg}>
        <Header merchantName={merchantData.merchantName} />
        <CartPage discounts={merchantData.discounts} />
        <List>
          {Object.keys(merchantData.items).map((k) => (
            <FoodItem key={k} name={k} items={merchantData.items[k]} onClickItem={onClickItem} />
          ))}
        </List>
      </Box>
    </Center>
  );
};

export default MainPage;
