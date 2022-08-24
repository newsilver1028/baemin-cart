import { atom } from 'jotai';
import { CartState } from '../../types/index.d';

export const cartAtom = atom<CartState[]>([]);
