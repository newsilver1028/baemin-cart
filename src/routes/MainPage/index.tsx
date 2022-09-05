import { MouseEventHandler } from 'react';
import { useSetAtom } from 'jotai';
import { List } from '@chakra-ui/react';

import { cartAtom } from '../../store';
import { useMerchantInfo } from './useMerchantInfo';
import FoodItem from './FoodItem';
import Header from './Header';
import LoadingSpinner from '../components/LoadingSpinner.tsx';

// temp
import CartPage from '../CartPage';

const MainPage = () => {
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
    return <LoadingSpinner />;
  }

  return (
    <>
      <CartPage />
      <Header merchantName={merchantData.merchantName} />
      <List>
        {Object.keys(merchantData.items).map((k) => (
          <FoodItem key={k} name={k} items={merchantData.items[k]} onClickItem={onClickItem} />
        ))}
      </List>
    </>
  );
};

export default MainPage;
