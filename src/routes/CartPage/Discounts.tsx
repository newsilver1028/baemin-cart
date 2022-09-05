import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Heading,
  List,
  ListItem,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

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

  const [checkedItems, setCheckedItems] = useState(Array(merchantData.discounts.length).fill(true));
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  if (!merchantData || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Box {...COMMON_STYLE.itemWrapper} p='20px' bg={itemColor}>
        <Heading {...DISCOUNTS_STYLE.title}>할인</Heading>
        <List>
          <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            defaultChecked
            onChange={(e) => setCheckedItems(Array(merchantData.discounts.length).fill(e.target.checked))}
          >
            <Text {...CART_LIST_STYLE.itemText}>전체 선택</Text>
          </Checkbox>

          {merchantData.discounts.map((d, i) => (
            <>
              <ListItem key={d.id} {...DISCOUNTS_STYLE.item}>
                <Checkbox
                  defaultChecked
                  isChecked={checkedItems[i]}
                  onChange={(e) =>
                    setCheckedItems((prev) => {
                      const prevValue = [...prev];
                      prevValue[i] = e.target.checked;
                      return [...prevValue];
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
            </>
          ))}
        </List>
      </Box>
      <Box {...COMMON_STYLE.itemWrapper} p='20px' bg={itemColor}>
        <Text>총 주문금액</Text>
      </Box>
    </>
  );
};

export default Discounts;
