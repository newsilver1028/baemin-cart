import { useState } from 'react';
import { Box, Center, Heading, List, Spinner } from '@chakra-ui/react';

import { useMerchantInfo } from './useMerchantInfo';
import { MAIN_PAGE_STYLE } from './MAIN_PAGE_STYLE';
import FoodItem from './FoodItem';
import Discounts from '../CartPage/Discounts';

const MainPage = () => {
  const [isOpen, setIsopen] = useState(false);

  const onOpen = () => {
    setIsopen((prev) => !prev);
  };

  const { isLoading, merchantData } = useMerchantInfo();

  if (!merchantData || isLoading) {
    return <Spinner thickness='4px' speed='0.65s' color='gray.200' size='xl' />;
  }

  return (
    <Center>
      <Box {...MAIN_PAGE_STYLE.container}>
        <Heading>{merchantData.marchantName}</Heading>
        <List>
          {Object.keys(merchantData.items).map((k) => (
            <FoodItem key={k} name={k} items={merchantData.items[k]} />
          ))}
        </List>
        <Heading>Discounts</Heading>
        <Discounts items={merchantData.discounts} />
      </Box>
    </Center>
  );
};

export default MainPage;
