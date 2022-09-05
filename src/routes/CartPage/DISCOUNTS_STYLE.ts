import { MotionProps } from 'framer-motion';

export const DISCOUNTS_STYLE = {
  title: {
    size: 'md',
    my: '10px',
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
};
