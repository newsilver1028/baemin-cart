import { BadgeProps, FlexProps } from '@chakra-ui/react';

export const HEADER_STYLE = {
  header: {
    position: 'sticky',
    top: '-5px',
    p: '10px 20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    h: '60px',
    zIndex: '2',
  } as FlexProps,
  heading: {
    size: 'lg',
  },
  badge: {
    mt: '-10px',
    w: '15px',
    h: '15px',
  } as BadgeProps,
};
