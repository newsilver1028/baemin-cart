import { useState } from 'react';
import { useAtomValue } from 'jotai';
import {
  Box as Text,
  Checkbox,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { cartAtom } from '../../store';
import { COMMON_STYLE } from '../COMMON_STYLE';
import { formattedKRWPrice } from '../utils';

import { CART_LIST_STYLE } from './CART_LIST_STYLE';
import { DISCOUNTS_STYLE } from './DISCOUNTS_STYLE';

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const DiscountModal = ({ title, isOpen, onClose }: Props) => {
  const cartList = useAtomValue(cartAtom);

  const [checkedItems, setCheckedItems] = useState(Array(cartList.length).fill(true));
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...DISCOUNTS_STYLE.modal}>
      <ModalOverlay bg='blackAlpha.300' />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            <Checkbox
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              defaultChecked
              onChange={(e) => setCheckedItems(Array(cartList.length).fill(e.target.checked))}
            >
              <Text {...CART_LIST_STYLE.itemText}>전체 선택</Text>
            </Checkbox>
            {cartList.map((c, i) => (
              <ListItem key={c.name} {...COMMON_STYLE.itemWrapper} mb='30px'>
                <Checkbox
                  value={c.name}
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
                  <Text {...CART_LIST_STYLE.itemText}>{`${c.name} X ${c.quantity}`}</Text>
                  {/* <Text>- {formattedKRWPrice(c.priceByQuantity)}</Text> */}
                  <Text {...DISCOUNTS_STYLE.priceText}>- {formattedKRWPrice(c.price)}</Text>
                </Checkbox>
              </ListItem>
            ))}
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DiscountModal;
