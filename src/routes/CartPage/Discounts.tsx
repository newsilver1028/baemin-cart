import { useAtomValue } from 'jotai';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { cartAtom } from '../../store';
import { useMerchantInfo } from '../MainPage/useMerchantInfo';

import LoadingSpinner from '../components/LoadingSpinner.tsx';
import { COMMON_STYLE } from '../COMMON_STYLE';
import { CART_LIST_STYLE } from './CART_LIST_STYLE';
import { DISCOUNTS_STYLE } from './DISCOUNTS_STYLE';
import DiscountModal from './DiscountModal';

const Discounts = () => {
  const itemColor = useColorModeValue('white', 'gray.900');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isLoading, merchantData } = useMerchantInfo();

  if (!merchantData || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Box {...COMMON_STYLE.itemWrapper} p='20px' bg={itemColor}>
      <Heading {...DISCOUNTS_STYLE.title}>할인</Heading>
      <List>
        {merchantData.discounts.map((d) => (
          <ListItem key={d.id} {...DISCOUNTS_STYLE.item}>
            <Checkbox>
              <Text {...CART_LIST_STYLE.itemText}>{d.name}</Text>
            </Checkbox>
            <Button onClick={onOpen}>메뉴 선택</Button>
            <DiscountModal title={d.name} isOpen={isOpen} onClose={onClose} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Discounts;
