import { useQuery } from 'react-query';

import { getMerchantInfoApi } from '../../service';
import { Item, MerchantInfo } from '../../types/index.d';

interface UseMerchantInfoReturn {
  isLoading: boolean;
  merchantData: MerchantInfo;
}

export const useMerchantInfo = (): UseMerchantInfoReturn => {
  const { isLoading, data } = useQuery(['getMerchantInfoApi'], () => getMerchantInfoApi(), {
    onError(err) {
      console.log({ err });
    },
  });

  const formattedItems = data?.items.reduce((acc: Record<string, Item[]>, curr: Item) => {
    if (!acc[curr.categoryId]) {
      acc[curr.categoryId] = [];
    }
    acc[curr.categoryId].push(curr);

    return acc;
  }, {});

  return {
    isLoading,
    merchantData: {
      discounts: data?.discounts,
      marchantName: data?.merchantData,
      minimumOrderPrice: data?.minimumOrderPrice,
      items: formattedItems,
    },
  };
};
