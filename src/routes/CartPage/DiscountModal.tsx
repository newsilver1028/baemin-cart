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
import { useAtomValue } from 'jotai';

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

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...DISCOUNTS_STYLE.modal}>
      <ModalOverlay bg='blackAlpha.300' />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            {cartList.map((c) => (
              <ListItem key={c.name} {...COMMON_STYLE.itemWrapper} mb='30px'>
                <Checkbox>
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
