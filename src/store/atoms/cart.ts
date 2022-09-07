import { atom } from 'jotai';
import { CartState } from '../../types/index.d';

export const cartAtom = atom<CartState[]>([]);

export const totalPriceAtom = atom((get) =>
  get(cartAtom).reduce((acc, curr) => {
    // eslint-disable-next-line no-param-reassign
    acc += curr.priceByQuantity;
    return acc;
  }, 0)
);
