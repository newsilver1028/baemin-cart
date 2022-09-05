import { useState } from 'react';
import { useAtomValue } from 'jotai';
import {
  Text,
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

  const initialValue = cartList.map((c) => c.name);
  const [checkedItems, setCheckedItems] = useState(initialValue);
  const allChecked = checkedItems.length === initialValue.length;
  const onAllCheckedChange = () => {
    if (allChecked) {
      setCheckedItems([]);
      return;
    }
    setCheckedItems(initialValue);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...DISCOUNTS_STYLE.modal}>
      <ModalOverlay bg='blackAlpha.300' />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            <Checkbox isChecked={allChecked} isIndeterminate={!allChecked} defaultChecked onChange={onAllCheckedChange}>
              <Text {...CART_LIST_STYLE.itemText}>전체 선택</Text>
            </Checkbox>
            {cartList.map((c, i) => (
              <ListItem key={c.name} {...COMMON_STYLE.itemWrapper} mb='30px'>
                <Checkbox
                  value={c.name}
                  defaultChecked
                  isChecked={checkedItems.includes(c.name)}
                  onChange={(e) =>
                    setCheckedItems((prev) => {
                      const { value } = e.currentTarget;
                      if (prev.includes(value)) return prev.filter((p) => p !== value);
                      return [...prev, value];
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
