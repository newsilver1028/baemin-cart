import { atom } from 'jotai';
import { cartAtom } from '../atoms';

export const totalPriceAtom = atom((get) =>
  get(cartAtom).reduce((acc, curr) => {
    // eslint-disable-next-line no-param-reassign
    acc += curr.priceByQuantity;
    return acc;
  }, 0)
);
