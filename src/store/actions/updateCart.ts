import produce from 'immer';
import { atom } from 'jotai';
import { CartState } from '../../types/index.d';
import { cartAtom } from '../atoms';

// export const increaseQuantity = atom(null, (get, set, value: { name: string; price: number; quantity: number }) =>
//   set(cartAtom, produce((get(cartAtom).find((c) => c.name === value.name)!.quantity += 1)))
// );

export const readOnlyAtom = atom((get) => get(cartAtom).find((c) => c.name));
