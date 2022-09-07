import { useState } from 'react';
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

import { useMerchantInfo } from '../MainPage/useMerchantInfo';
import { formattedKRWPrice } from '../utils';

import LoadingSpinner from '../components/LoadingSpinner.tsx';
import DiscountModal from './DiscountModal';
import { COMMON_STYLE } from '../COMMON_STYLE';
import { CART_LIST_STYLE } from './CART_LIST_STYLE';
import { DISCOUNTS_STYLE } from './DISCOUNTS_STYLE';
import { totalPriceAtom } from '../../store';

const Discounts = () => {
  const itemColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('#EDF2F7', '#1A202C');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, merchantData } = useMerchantInfo();
  const getTotalPrice = useAtomValue(totalPriceAtom);
  const disabled = getTotalPrice < merchantData.minimumOrderPrice;

  const initialValue = merchantData.discounts.map((d) => d.name) ?? [];
  const [checkedItems, setCheckedItems] = useState(initialValue);
  const allChecked = checkedItems.length === initialValue.length;
  const onAllCheckedChange = () => {
    if (allChecked) {
      setCheckedItems([]);
      return;
    }
    setCheckedItems(initialValue);
  };

  if (!merchantData || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Box>
      <Box {...COMMON_STYLE.itemWrapper} position='relative' mb='80px' p='20px' bg={itemColor}>
        <Heading {...DISCOUNTS_STYLE.title}>할인</Heading>
        <List>
          <Checkbox isChecked={allChecked} isIndeterminate={!allChecked} defaultChecked onChange={onAllCheckedChange}>
            <Text {...CART_LIST_STYLE.itemText}>전체 선택</Text>
          </Checkbox>
          {merchantData.discounts.map((d, i) => (
            <Box key={d.id}>
              <ListItem {...DISCOUNTS_STYLE.item}>
                <Checkbox
                  value={d.name}
                  defaultChecked
                  isChecked={checkedItems.includes(d.name)}
                  onChange={(e) =>
                    setCheckedItems((prev) => {
                      const { value } = e.currentTarget;
                      if (prev.includes(value)) return prev.filter((p) => p !== value);
                      return [...prev, value];
                    })
                  }
                >
                  <Text {...CART_LIST_STYLE.itemText}>{d.name}</Text>
                </Checkbox>
                <Button onClick={onOpen} isDisabled={!checkedItems[i]}>
                  메뉴 선택
                </Button>
              </ListItem>
              <DiscountModal title={d.name} isOpen={isOpen} onClose={onClose} />
            </Box>
          ))}
        </List>
      </Box>
      <Flex {...DISCOUNTS_STYLE.footer} bg={itemColor} borderTop={`2px solid ${borderColor}`}>
        <Button {...DISCOUNTS_STYLE.orderButton} disabled={disabled}>
          <Text>{formattedKRWPrice(getTotalPrice)}</Text>
          <Text>배달 주문하기</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default Discounts;
