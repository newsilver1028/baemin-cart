import { ChakraProps } from '@chakra-ui/react';
import { MotionProps } from 'framer-motion';

export const DISCOUNTS_STYLE = {
  title: {
    size: 'md',
    mt: '10px',
    mb: '20px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    my: '20px',
    w: '100%',
  },
  modal: {
    size: 'xs',
    motionPreset: 'slideInBottom',
    isCentered: true,
  } as MotionProps,
  priceText: {
    color: 'red',
    mt: '5px',
  },
  totalPrice: {
    mt: '10px',
  },
  footer: {
    position: 'fixed',
    bottom: '150px',
    px: '20px',
    w: '375px',
    h: '60px',
    alignItems: 'center',
    borderBottomRadius: '20px',
  } as ChakraProps,
  orderButton: {
    display: 'flex',
    justifyContent: 'space-between',
    px: '20px',
    w: '100%',
  },
};
